import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

export default [{
        name: 'center',
        path: "/center",
        component: () =>
            import ('@/pages/Center'),
        meta: {
            show: true,
        },
        children: [{
                path: "myOrder",
                component: () =>
                    import ('@/pages//Center/myOrder'),
            }, {
                path: "groupOrder",
                component: () =>
                    import ('@/pages//Center/groupOrder'),
            }, {
                path: "/center",
                redirect: '/center/myorder'
            }] //路由元信息
    }, {
        name: 'paysuccess',
        path: "/paysuccess",
        component: PaySuccess,
        meta: {
            show: true,

        } //路由元信息
    }, {
        name: 'pay',
        path: "/Pay",
        component: Pay,
        meta: {
            show: true,

        }, //路由元信息
        beforeEnter: (to, from, next) => {
            if (from.path == '/Trade') {
                next()
            } else {
                next(false)
            }
        }
    }, {
        name: 'Trade',
        path: "/Trade",
        component: Trade,
        meta: {
            show: true,

        }, //路由元信息
        beforeEnter: (to, from, next) => {
            // ...
            if (from.path == "/shopcart") {
                next()
            } else {
                next(false)
            }
        }
    }, {
        name: 'shopcart',
        path: "/shopcart",
        component: ShopCart,
        meta: {
            show: true,

        } //路由元信息
    }, {
        name: 'addcartsuccess',
        path: "/addcartsuccess",
        component: AddCartSuccess,
        meta: {
            show: true,

        } //路由元信息
    }, {
        name: 'detail',
        path: "/detail/:skuid",
        component: Detail,
        meta: {
            show: true,

        } //路由元信息
    }, {
        name: 'home',
        path: "/home",
        component: Home,
        meta: {
            show: true,

        } //路由元信息
    }, {
        name: 'search',
        path: "/search/:keyword",
        component: Search,
        meta: {
            show: true,

        }
    }, {
        name: 'login',
        path: "/login",
        component: Login,
        meta: { show: false }
    }, {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "*",
        redirect: 'home'
    }
]