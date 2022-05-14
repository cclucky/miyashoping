import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"

const requests = axios.create({
        //基础路径
        baseURL: "/mock",
        timeout: 5000,
    })
    //请求拦截器
requests.interceptors.request.use((config) => {
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