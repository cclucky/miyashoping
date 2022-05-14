import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import store from '@/store'

const requests = axios.create({
        //基础路径
        baseURL: "/api",
        timeout: 5000,
    })
    //请求拦截器
requests.interceptors.request.use((config) => {
        //添加一个请求头字段（userTempId）,后端商量好的
        if (store.state.detail.uuid_token) {
            config.headers.userTempId = store.state.detail.uuid_token
        }
        if (store.state.user.token) {
            config.headers.token = store.state.user.token
        }
        //进度条
        nprogress.start();
        //config  配置对象，有个属性，headers，请求头
        return config;
    })
    //响应拦截器
requests.interceptors.response.use((res) => {
        //进度条
        nprogress.done();
        //请求成功的回调函数
        return res.data;
    }, (error) => {
        //响应失败的回调函数
        return Promise.reject(new Error('faile'));
    })
    //对外暴露
export default requests;