// 定义请求函数

import axios from 'axios';

// 获取todolist
export const getTodoListApi = async () => {
  return await axios.get('/api/todoList');
};

// 添加todo
export const addTodoApi = async (title: string) => {
  return await axios.post('/api/addtodo', { title: title });
};

// 更新todo
export const updateOneTodoAPi = async (_id: number, isDone: boolean) => {
  return await axios.put('/api/updateone', { _id, isDone });
};
