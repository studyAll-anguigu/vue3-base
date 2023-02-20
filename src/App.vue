<!-- 
  总结：
  路由： 一级路由，嵌套路由
  动态路由
  路由参数： params，query，meta
  路由缓存
  路由守卫
  。。。
 -->
<template>
  <div>
    <h1>App</h1>
    <router-link to="/home">Home</router-link> &nbsp;
    <router-link :to="{ name: 'List' }">List</router-link>
    <br /><br />
    <!-- 以及路由组件出口 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<script lang="ts" setup></script>

<style scoped></style>
