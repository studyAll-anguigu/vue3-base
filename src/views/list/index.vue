<template>
  <ul class="todo-main">
    <Item v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </ul>
</template>
<script setup lang="ts">
import Item from './components/item.vue';
import { defineProps } from 'vue';
import type { TodoList } from '../../type';
// 声明接收props

defineProps<{
  todoList: TodoList;
}>();
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
