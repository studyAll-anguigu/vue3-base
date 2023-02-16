<template>
  <div>child</div>
  <div>{{ childPerson }}</div>
</template>
<script lang="ts">
export default {
  name: 'Child',
  // 注入, 接收来自上层组件(父组件或祖先组件)提供的数据
  inject: ['person'],
  data() {
    return {
      // 因为注入是在组件解析之前执行的,因此这个阶段可以拿到inject的数据
      childPerson: this.person,
    };
  },
  mounted() {
    console.log('app组件提供的person数据', this.childPerson);
  },
};
</script>
