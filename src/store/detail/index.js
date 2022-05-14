import { reqGoodsInfo, reBuyShoopCar } from '@/api'
//封装游客身份模块uuid，生成一个随机字符串，生成后就不变了
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodsInfo: {},
    uuid_token: getUUID()
}
const actions = {
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
    async addBuyShoopCar({ commit }, { skuId, skuNum }) {
        let result = await reBuyShoopCar(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error("faile"))
        }
    }
}
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || []
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || []
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}



export default {
    state,
    actions,
    mutations,
    getters
}