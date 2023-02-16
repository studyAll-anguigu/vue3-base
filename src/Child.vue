<template>
  <div>child</div>
  <div>{{ $attrs }}</div>
  <button @click="$emit('say')">say()</button>
</template>
<script lang="ts">
export default {
  name: 'XChild',
  // 声明接收props
  props: {
    person: Object,
  },
  // 声明接收自定义事件
  // 声明接收，就自动绑定为自定义事件
  // 未声明接收，就绑定为dom事件
  // 触发都是通过$emit触发自定义事件
  emits: ['say'],
  mounted() {
    console.log(this);
  },
};
</script>
<style lang="less"></style>

<!-- 
  总结：
  子组件接收父组件传过来的数据
  - 在vue3中，所有 未声明的props 和 自定义事件 都存放在 this.$attrs中
  - 只要在props中声明接收了，就不会存在$attrs中
  - 同样，在emits中声明接收了，就不会存放在$attrs中了

 -->
