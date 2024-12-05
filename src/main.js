//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//测试接口函数

//引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


//引入全局组件插件
import { componentsPlugin } from "@/components/index.js";
const app = createApp(App)
const pinia = createPinia()


app.use(createPinia())
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')

//定义全局指令

