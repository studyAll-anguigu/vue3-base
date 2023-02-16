<template>
  <div>
    <!-- 默认 -->
    <Home v-model="age"></Home>

    <!-- 绑定多个，起个名字
      v-model:xxx= 'yyy'
      绑定了xxx属性
      绑定了update:xxx自定义事件
    -->
    <Home v-model:num="num"></Home>
    <Home v-model:list="list"></Home>
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
      num: 1,
      list: [1, 2, 3, 4],
    };
  },
};
</script>
