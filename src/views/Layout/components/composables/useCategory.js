import { onBeforeRouteUpdate } from "vue-router";
import { ref,onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCategoriesAPI } from "@/apis/category.js";
//封装分类业务相关代码
export function useCategory() {
//获取数据
    const categoryData = ref([]);
    const route = useRoute();
//不改变路由参数时保持原样
    const getCategories = async (id=route.params.id) => {
        const res = await getCategoriesAPI(id)
        categoryData.value = res.result
    }
    onMounted(()=>{getCategories()})
//目标:路由参数变化的时候,可以把分类数据接口分别发送
    onBeforeRouteUpdate((to)=>{
        console.log('路由变化了')
        //解决方法: 使用最新的路由参数请求最新的分类数据
        console.log(to)
        getCategories(to.params.id)
    })
    return{
        categoryData,
    }
}