//管理用户数据相关
import { defineStore  } from "pinia";
import { ref  } from "vue";
import { loginAPI } from "@/apis/user.js";

export const useUserStore = defineStore("users", ()=>{
    //1.定义管理用户数据的state
    const userInfo =ref({})
    //2.定义获取接口数据的action
    const getUserInfo =async ({account,password})=>{
         const res = await loginAPI({account,password})
        userInfo.value = res.result
    }
    //3.以对象的格式把对store和action return
    return{
        userInfo,
        getUserInfo
    }
},{
    persist:true,
})