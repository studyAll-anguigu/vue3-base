<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List
        :todoList="todoList"
        @updateOneChecked="updateOneChecked"
        @delOneTodo="delOneTodo"
      />
      <Footer
        :isDoneTotal="isDoneTotal"
        :total="total"
        @updateAllChecked="updateAllChecked"
        @batchDelTodo="batchDelTodo"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './views/header.vue';
import List from './views/list/index.vue';
import Footer from './views/footer.vue';

import { ref, computed, watch } from 'vue';
//引入数据类型
import type { TodoList, TodoItem } from './type';
// 定义数据
const todoList = ref<TodoList>(
  JSON.parse(localStorage.getItem('todolist') as string) || []
);

// 监听todolist，缓存数据
watch(
  todoList,
  (data) => {
    localStorage.setItem('todolist', JSON.stringify(todoList.value));
    console.log('watch', data);
  },
  {
    immediate: true,
    deep: true,
  }
);

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

// 总任务数量
const total = computed(() => {
  return todoList.value.length;
});

// 已完成任务数量
const isDoneTotal = computed(() => {
  return todoList.value.reduce((p, c) => {
    let num = c.isDone ? 1 : 0;
    return p + num;
  }, 0);
});

//全选，全不选
const updateAllChecked = (target: boolean) => {
  console.log(target);
  todoList.value.forEach((item) => (item.isDone = target));
};
// 批量删除todo
const batchDelTodo = () => {
  todoList.value = todoList.value.filter((item) => !item.isDone);
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
