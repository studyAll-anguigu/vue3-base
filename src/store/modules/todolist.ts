// 定义store
import { defineStore } from 'pinia';
import type { Todolist } from '../../type';
import { getTodoListApi } from '../../api/index';

interface TodolistStore {
  todoList: Todolist;
}

export const useTodolistStore = defineStore('todoList', {
  state: (): TodolistStore => {
    return {
      todoList: [],
    };
  },
  actions: {
    // 获取todolist
    async getTodoList() {
      const res = await getTodoListApi();
      console.log('actons函数中获取列表数据：', res);
      this.todoList = res.data.data;
    },
  },
});
