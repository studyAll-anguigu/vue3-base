// 定义store
import { defineStore } from 'pinia';
import type { Todolist } from '../../type';
import {
  getTodoListApi,
  addTodoApi,
  updateOneTodoAPi,
  delOneTodoAPi,
} from '../../api/index';

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

    // 添加todo
    async addTodo(title: string) {
      await addTodoApi(title);
      this.getTodoList(); // 重新获取列表，更细数据
    },

    // 修改todo
    async updateOnetodo(_id: number, isDone: boolean) {
      await updateOneTodoAPi(_id, isDone);
      this.getTodoList(); // 更新列表
    },

    // 删除todo
    async delOneTodo(_id: number) {
      console.log('modules中收到的id', _id, typeof _id);
      await delOneTodoAPi(_id);
      this.getTodoList();
    },
  },
});
