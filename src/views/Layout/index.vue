<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";

//触发获取导航列表的action
  const categoryStore = useCategoryStore();
  onMounted(()=> categoryStore.getCategory())

</script>

<template>
  <LayoutNav />
  <LayoutHeader />
<!--添加key 破坏复用机制 -->
<!--  <RouterView :key="$route.fullPath" />-->
  <RouterView/>
  <LayoutFooter />
  <LayoutFixed/>
</template>