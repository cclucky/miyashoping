import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from './components/TypeNav'
import Pagination from './components/Pagination'
import { Button, MessageBox } from 'element-ui';

import store from '@/store'

import '@/mock/mockServe'

import 'swiper/css/swiper.css'

import * as API from '@/api'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false

import "@/plugins/validate"

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
    },
    router,
    store
}).$mount('#app')