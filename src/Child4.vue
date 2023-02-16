<template>
  <div>具名作用域插槽</div>
  <!-- 向父组件传 list数组过去 -->
  <slot :list="list" name="main"></slot>
</template>
<script lang="ts">
export default {
  name: 'Child4',
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};
</script>
