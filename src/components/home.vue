<template>
  <div>
    <br /><br />
    <div>Home</div>
    <!-- 获取路由参数： query查询字符串参数  -->
    <p>首页---{{ route.query.name }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
// 获取这个route对象
const route = useRoute();
</script>

<style scoped></style>
