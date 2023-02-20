<template>
  <div>Detail -- {{ route.params.id }}</div>
</template>

<script lang="ts">
export default {
  name: 'Detail',
};
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
// 这个route就是 $route ，存储路由的所有信息， path pathname,params,query....
const route = useRoute();
</script>

<style scoped></style>
