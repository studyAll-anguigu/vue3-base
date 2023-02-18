import axios from 'axios'

// 获取todolist
export const getTodoListApi = async ()=>{
  return await axios.get ('/api/todoList')
}

// 添加todo
export const addTodoApi = ()=> {}