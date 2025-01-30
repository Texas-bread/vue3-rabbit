import axios from 'axios';
import {useUserStore} from "@/stores/user.js";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";
// 创建axios实例
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// axios请求拦截器
http.interceptors.request.use(config => {
    // You can modify the config here if needed
    //1.从pinia获取token数据
        const userStore = useUserStore()
        //2.获取后端的要求拼接token数据
        const token= userStore.userInfo.token

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, e => Promise.reject(e));

// axios响应拦截器
http.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    //统一的错误提醒
    ElMessage({
        type: 'warning',
        message: e.response.data.message,
    })
    //401token失效处理
    //1.清理本地数据
    //2.跳转到登录页
    if(e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e);
});

export default http;