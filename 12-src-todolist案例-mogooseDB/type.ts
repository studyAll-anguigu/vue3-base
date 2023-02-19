export interface TodoItem {
  _id: number;
  title: string;
  isDone: boolean;
}

export type Todolist = TodoItem[];

export interface responseType<T> {
  code: number;
  message: string;
  success: string;
  data: T;
}
