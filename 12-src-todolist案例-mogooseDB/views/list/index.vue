<template>
  <ul class="todo-main">
    <Item v-for="todo in todolistStore.todoList" :key="todo._id" :todo="todo" />
  </ul>
</template>
<script lang="ts">
export default {
  name: 'List',
};
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Item from './components/item.vue';

import { useTodolistStore } from '../../store/modules/todolist';

const todolistStore = useTodolistStore();

onMounted(() => {
  // 调用获取列表函数
  todolistStore.getTodoList();
});
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
