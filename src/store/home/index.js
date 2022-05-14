//home模块的小仓库
import { reqCategoryList, reqGetBannerList, reFloorList } from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};

const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data.slice(0, 16))
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code === 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async floorList({ commit }) {
        let result = await reFloorList()
        if (result.code === 200) {
            commit("FLOORLIST", result.data)
        }
    }
};

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}