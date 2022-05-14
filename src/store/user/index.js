import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api'
const state = {
    code: '',
    token: '',
    userInfo: localStorage.getItem("token")
}
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async UserRegister({ commit }, data) {
        let result = await reqUserRegister(data)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            localStorage.setItem("token", result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        }
        //  else {
        //     return Promise.reject(new Error('faile'))
        // }
    },
    async loginOut({ commit }) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit('LOGINOUT')
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    LOGINOUT(state) {
        state.code = '',
            state.token = '',
            state.userInfo = {}
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}