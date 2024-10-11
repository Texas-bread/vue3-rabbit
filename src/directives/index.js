import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
    //懒加载指令逻辑
        app.directive('img-lazy',{
            mounted(el,binding){
                console.log(el,binding.value)
                //解决重复监听问题
                const { stop } =useIntersectionObserver(
                    el,
                    ([{ isIntersecting }])=>{
                        console.log(isIntersecting)
                        if(isIntersecting){
                            el.src = binding.value
                            stop()
                        }
                    },
                )}
        })
    }
}


    //懒加载指令逻辑
