<template>
  <!-- 访问 store中的state数据 -->
  <p>{{ userStore.person.firstName }}</p>
  <p>{{ userStore.person.lastName }}</p>
  <!-- 访问store中的getter数据 -->
  <p>{{ userStore.fullName }}</p>

  <p>{{ userStore.person.age }} 岁</p>
  <button @click="addAge">年龄+1</button>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<script lang="ts" setup>
import { useUserStore } from './store/modules/user';

const userStore = useUserStore();
console.log('user', userStore);

// 添加年龄 (通过回调函数)
const addAge = () => {
  userStore.addAge();
};
</script>

<style scoped></style>
