<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.isDone"
        @change="handelUpdateTodo(todo._id, todo.isDone)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo(todo._id)">删除</button>
  </li>
</template>
<script lang="ts">
export default {
  name: 'Item',
};
</script>

<script setup lang="ts">
import { defineProps } from 'vue';
import { TodoItem } from '../../../type';

import { useTodolistStore } from '../../../store/modules/todolist';
import { updateOneTodoAPi } from '../../../api/index';

const todolistStore = useTodolistStore();

defineProps<{
  todo: TodoItem;
}>();

// 更新todo状态
const handelUpdateTodo = async (_id: number, isDone: boolean) => {
  await updateOneTodoAPi(_id, isDone);
};

// 删除todo   通过store是方法修改
const delTodo = async (_id: number) => {
  console.log('触发了删除点击事件', typeof _id);
  await todolistStore.delOneTodo(_id);
};
</script>

<style scoped lang="less">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background: #eee;
  button {
    display: block;
  }
}
</style>
