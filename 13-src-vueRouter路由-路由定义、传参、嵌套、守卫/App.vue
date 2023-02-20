<!-- 
  总结：
  路由： 一级路由，嵌套路由
  动态路由
  路由参数： params，query，meta
  路由缓存 : 
    使用内置组件： transition 
    按规范需要每个模板组件需要个根标签包裹，否则会有一个警告。但是不影响功能的使用
  路由守卫 ：
    beforeEach()
    beforeResolve()
    afterEach()
    。。。
 -->
<template>
  <div>
    <h1>App</h1>
    <h1>路由跳转方式</h1>
    <!-- 路由跳转方式1： 声明式跳转 -->
    <router-link to="/home">Home</router-link><br />
    <router-link :to="{ name: 'List' }">List</router-link><br />
    <!-- 路由跳转方式2： 编程式跳转 -->
    <a href="#" @click="toMeaage">去detail页面</a><br />

    <h1>路由传参类型</h1>
    <!-- 路由传参1： 查询字符串参数 query -->
    <router-link :to="{ name: 'Home', query: { name: 'aaa' } }">
      Home-query参数
    </router-link>
    <br />
    <!-- 路由传参2： 动态路由参数 params -->
    <router-link :to="{ name: 'Detail', params: { id: 66 } }">
      detail-params参数
    </router-link>

    <!-- 一级路由组件出口 -->
    <router-view v-slot="{ Component }">
      <!-- 过度效果 -->
      <transition name="fade">
        <!-- 路由缓存,通过router-view暴露一个v-slot，这个主要是配合 路由缓存和路由过度使用 -->
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toMeaage = () => {
  router.push({ name: 'Detail', params: { id: 5 } });
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
