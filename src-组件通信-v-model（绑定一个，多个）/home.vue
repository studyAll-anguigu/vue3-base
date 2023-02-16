<template>
  <h1>home</h1>
  <p v-if="modelValue">年龄： {{ modelValue }}</p>
  <p v-if="num">num: {{ num }}</p>
  <p v-if="list.length">{{ list }}</p>
  <button @click="$emit('update:modelValue', modelValue + 1)">age + 1</button>
  <button @click="$emit('update:num', num + 1)">num+1</button>
  <button @click="changeList">修改list</button>
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
    list: {
      type: Array,
      default: () => [],
    },
  },
  // 声明接收事件
  emits: ['update:modelValue', 'update:num', 'update:list'],
  mounted() {
    console.log(this);
  },
  methods: {
    changeList() {
      this.$emit('update:list', ['张三', 30]);
    },
  },
};
</script>

<style scoped></style>
