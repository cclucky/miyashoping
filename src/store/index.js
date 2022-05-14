import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import Trade from './Trade'
//使用一次插件
Vue.use(Vuex);

// //state 仓库储存数据的地方
// const state = {};
// //mutations 修改 state的唯一手段
// const mutations = {};
// //actions 处理业务逻辑的？
// const actions = {};
// //可理解为计算属性，简化仓库数据，让组件获取仓库数据更加方便
// const getters = {}

//对外暴露store类的一个实例
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        Trade
    }
})