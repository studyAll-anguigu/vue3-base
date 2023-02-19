// 定义store
import { defineStore } from 'pinia';
import type { Todolist, TodoItem } from '../../type';
import {
  getTodoListApi,
  addTodoApi,
  updateOneTodoAPi,
  delOneTodoAPi,
  batchDelTodoApi,
  batchUpdateTodoApi,
} from '../../api/index';

interface TodolistStore {
  todoList: Todolist;
  ids?: Array<number>;
  ischeckedTodoIdList?: number[];
}

export const useTodolistStore = defineStore('todoList', {
  state: (): TodolistStore => {
    return {
      todoList: [],
      ids: [],
    };
  },
  getters: {
    // 底部全选按钮
    isAllcheck: (state) => {
      return (
        state.todoList.every((item) => item.isDone) && state.todoList.length > 0
      );
    },
    // 已选todo的id列表
    ischeckedTodoIdList: (state) => {
      if (!state.todoList.length) return;
      let idlist: number[] = [];
      state.todoList.forEach((item) => {
        if (!item.isDone) return;
        idlist.push(item._id);
      });
      return idlist;
    },
  },
  actions: {
    // 获取todolist
    async getTodoList() {
      const res = await getTodoListApi();
      this.todoList = res.data.data;
      // this.ids = this.todoList.filter((item) => item.isDone);
      // console.log('actons函数中获取列表数据：', res);
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
      await delOneTodoAPi(_id);
      this.getTodoList();
    },

    // 批量删除
    async batchDelTodo() {
      const idslist = this.ischeckedTodoIdList as number[];
      await batchDelTodoApi(idslist);
      this.getTodoList();
    },

    // 批量修改todo，全选，全不选
    async batchUpdateTodo() {
      const idlist = this.todoList.map((item) => item._id);
      await batchUpdateTodoApi(idlist, this.isAllcheck);
      this.getTodoList();
    },
  },
});
