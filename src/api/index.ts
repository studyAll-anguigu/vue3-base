// 定义请求函数

import axios from 'axios';
import { responseType, Todolist } from '../type';

// 获取todolist
export const getTodoListApi = async () => {
  return await axios.get<responseType<Todolist>>('/api/todoList');
};

// 添加todo
export const addTodoApi = async (title: string) => {
  return await axios.post<responseType<null>>('/api/addtodo', { title: title });
};

// 更新todo
export const updateOneTodoAPi = async (_id: number, isDone: boolean) => {
  return await axios.put<responseType<null>>('/api/updateone', { _id, isDone });
};

// 批量更新，全选 、全不选
export const batchUpdateTodoApi = async (
  todoIdList: number[],
  target: boolean
) => {
  const isDone = !target;
  return await axios.put('/api/batchUpdateTodo', { todoIdList, isDone });
};

// 删除todo
export const delOneTodoAPi = async (_id: number) => {
  return await axios.delete<responseType<null>>('/api/delonetodo', {
    data: {
      _id,
    },
  });
};

// 批量删除
export const batchDelTodoApi = async (todoIdList: number[]) => {
  return await axios.delete('/api/batchDelTodo', {
    data: {
      todoIdList,
    },
  });
};
