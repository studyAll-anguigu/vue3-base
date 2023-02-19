<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span> <span>已完成 1</span> / 全部 1 </span>
    <button class="btn btn-danger" @click="handleBatchDel">
      清除已完成任务
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Footer',
};
</script>
<script setup lang="ts">
import { useTodolistStore } from '../store/modules/todolist';

const todolistStore = useTodolistStore();
// 批量删除
const handleBatchDel = async () => {
  await todolistStore.batchDelTodo();
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
