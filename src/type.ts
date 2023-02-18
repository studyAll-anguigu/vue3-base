export interface TodoItem {
  _id:number,
  title:string,
  isDone:boolean
}

export type Todolist = TodoItem[]