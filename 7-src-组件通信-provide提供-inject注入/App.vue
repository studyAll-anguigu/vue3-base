<template>
  <div>app</div>
  <Parent></Parent>
</template>

<script lang="ts">
import Parent from './Parent.vue';
export default {
  name: 'App',
  components: { Parent },
  // 提供数据. 只要是app的后代组件,都可以接收到这些数据
  // 作用: 可以跨级通信,
  // 应用场景 : 通常 祖孙之间 . 父子组件也可以,但是父子组件通常使用porps的方式
  provide: {
    person: {
      name: '张三',
      age: 20,
      sex: '男',
    },
  },
};
</script>
