<template>
  <div>作用域插槽</div>
  <!-- 把当前组件的num数据传给父组件 -->
  <slot :num="num" @say="say"></slot>
</template>
<script lang="ts">
export default {
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    say() {
      console.log('hello word');
    },
  },
};
</script>
