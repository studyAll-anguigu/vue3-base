// 启动服务 使用express框架，定义接口，响应数据出去给客户端
// 快速创建一个服务

import express from 'express';
import todoList from './db/index.js';
// 创建app对象
const app = express();

// 启动服务
app.listen(3000, (err, data) => {
  if (err) return console.log('启动服务失败');
  console.log('服务启动成功：http://127.0.0.1:3000/');
});

// 获取todolist接口
app.get('/todoList', async (req, res) => {
  const response = await todoList.find({}, { __v: 0 }); // 把__v 字段去掉不要返回去
  res.json({
    code: 200,
    message: '',
    success: 'ok',
    data: response,
  });
});
