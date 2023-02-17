<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List
        :todoList="todoList"
        @updateOneChecked="updateOneChecked"
        @delOneTodo="delOneTodo"
      />
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './views/header.vue';
import List from './views/list/index.vue';
import Footer from './views/footer.vue';

import { ref } from 'vue';
//引入数据类型
import type { TodoList, TodoItem } from './type';
// 定义数据
const todoList = ref<TodoList>([
  { id: 1, title: '吃饭', isDone: false },
  { id: 2, title: '看剧', isDone: true },
]);

// 添加todo
const addTodo = (title: string) => {
  todoList.value.push({
    id: Date.now(),
    title: title,
    isDone: false,
  });
};

// 单个复选状态改变
const updateOneChecked = (id: number) => {
  const todo = todoList.value.find((item) => item.id === id) as TodoItem;
  todo.isDone = !todo.isDone;
};

// 删除一个todo
const delOneTodo = (id: number) => {
  todoList.value = todoList.value.filter((item) => item.id !== id);
};
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
