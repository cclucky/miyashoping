import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
    address: [],
    order: {}
}

const actions = {
    async addressInfo({ commit }) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('ADDRESSINFO', result.data)
        }
    },
    async orderInfo({ commit }) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('ORDERINFO', result.data)
        }
    }
}

const mutations = {
    ADDRESSINFO(state, address) {
        state.address = address
    },
    ORDERINFO(state, order) {
        state.order = order
    }
}

const getters = {
    address(state) {
        return state.address || []
    },
    detailArrayList(state) {
        return state.order.detailArrayList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}