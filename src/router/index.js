//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import store from '@/store'
//使用插件
Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.push;

VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { y: 0 }
    },
})
router.beforeEach(async(to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        //已经登录了，不能再去登录页面
        if (to.path == "/login" || to.path == "/register") {
            next('/')
        } else {
            //已经登录了，要去的地方不是登录，验证一下有没有用户信息，有的话放行
            if (name) {
                next()
            } else {
                //登录了，但是没有用户信息，路由跳转前获取用户信息
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('loginOut')
                    next('/login')
                }
            }
        }
    } else {
        let toPath = to.path;
        if (toPath.indexOf('/Trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login')
        } else {
            next()
        }
    }
})

export default router