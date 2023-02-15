<template>
  <h1>home</h1>
  <p>{{ modelValue }}</p>
  <p>{{ num }}</p>
  <button @click="$emit('update:modelValue', modelValue + 1)">age + 1</button>
  <button @click="$emit('update:num', num + 1)">num+1</button>
</template>

<script lang="ts">
export default {
  name: 'Home',
  props: {
    modelValue: {
      type: Number,
    },
    num: {
      type: Number,
    },
  },
  // 声明接收事件
  emits: ['update:modelValue', 'update:num'],
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped></style>
