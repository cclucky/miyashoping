import { reqCartList, reqDeleteCartById, reqCheckedCartBySkuId } from '@/api'
const state = {
    cartList: []
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GECARTLIST', result.data)
        }
    },
    async deleteCartListBySkuId({ commit }, skuid) {
        let result = await reqDeleteCartById(skuid)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    //勾选状态
    async checkedCartBySkuId({ commit }, { skuId, isChecked }) {
        let result = await reqCheckedCartBySkuId(skuId, isChecked)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //删除所有勾选的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        //context 小仓库，commit提交mutations修改state，getters计算属性，dispatch，派发actions
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    upDateleAllIsChecked({ dispatch, state }, isChecked) {
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch("checkedCartBySkuId", { skuId: item.skuId, isChecked })
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const mutations = {
    GECARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const getters = {
    //空的
    // cartInfoList(state) {
    //     return state.cartList.cartInfoList || []
    // },
    cartList(state) {
        return state.cartList[0] || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}