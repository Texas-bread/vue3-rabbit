//createRouter:创建router实例对象
//createWebHistory:创建history模式的路由器

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import component from "element-plus/es/components/tree-select/src/tree-select-option";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path: '',
          component: Home,
        },
        {
          path: '/category/:id',
          component: Category,
        },
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
