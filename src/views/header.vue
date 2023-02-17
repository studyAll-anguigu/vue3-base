<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model.trim="title"
      @keyup.enter="handlAddTodo"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';

// 定义ref数据
const title = ref('');

// 在组合式API中 声明接收自定义事件
const emit = defineEmits(['addTodo']);

// 定义回调函数，setup语法糖中，声明即暴露
const handlAddTodo = () => {
  if (!title.value) return;
  emit('addTodo', title.value); // 触发滴定仪数据
  title.value = ''; //   清空输入框
};
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
