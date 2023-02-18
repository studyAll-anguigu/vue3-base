/**
 * 数据库名： todoList
 * 集合名（表）： todolist
 *
 * **/

// 引入mongoose
import mongoose from 'mongoose';

// 连接数据库  协议:// ip（域名）:端口号/数据库名
mongoose.connect('mongodb://127.0.0.1:27017/todoList');
// 监听连接事件，只触发一次监听
mongoose.connection.once('open', (err) => {
  if (err) return console.log('连接数据库失败');
  console.log('连接数据库成功');
});

// 创建文档解构
var todolistSchema = new mongoose.Schema({
  title: {
    type: String,
    isRequired: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

// 创建文档模型， todolist:集合名称   todolistSchema：集合的约束，即前面定义的文档结构
// var todoListModel = mongoose.model('todolist', todolistSchema);
var todoList = mongoose.model('todolist', todolistSchema);

// 往文档里面添加数据 , 添加一条
// todoList.create({ title: '吃饭' }, (err, data) => {
//   if (err) throw err;
//   console.log('添加数据成功');
// });

export default todoList;
