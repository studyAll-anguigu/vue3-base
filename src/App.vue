<template>
  <div>
    <!-- 默认 -->
    <Home v-model="age"></Home>

    <!-- 绑定多个，起个名字 -->
    <Home v-model:num="num"></Home>
  </div>
</template>
<script lang="ts">
import Home from './home.vue';

export default {
  name: 'App',
  components: { Home },
  data() {
    return {
      age: 20,
      num: 0,
    };
  },
};
</script>
