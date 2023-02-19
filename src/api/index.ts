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
