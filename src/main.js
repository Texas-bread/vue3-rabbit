//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//测试接口函数

//引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

//定义全局指令

