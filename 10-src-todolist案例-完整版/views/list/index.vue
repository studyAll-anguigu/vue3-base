<template>
  <ul class="todo-main">
    <!-- 直接把$attrs传下去 -->
    <Item v-for="todo in todoList" :key="todo.id" :todo="todo" v-on="$attrs" />
  </ul>
</template>
<script lang="ts">
export default {
  name: 'List',
};
</script>
<script setup lang="ts">
import Item from './components/item.vue';
import { defineProps, defineEmits } from 'vue';
import type { TodoList } from '../../type';
// 声明接收props
const propss = defineProps<{
  todoList: TodoList;
}>();

// 声明接收自定义事件
// const emit = defineEmits(['updateOneChecked']);
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
