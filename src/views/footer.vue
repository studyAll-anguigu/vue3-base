<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        :checked="todolistStore.isAllcheck"
        @change="handelBatchUpdate"
      />
    </label>
    <span>
      <span>已完成 {{ todolistStore.ischeckedTodoIdList?.length }}</span> / 全部
      {{ todolistStore.todoList.length }}
    </span>
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

// 全选，全不选
const handelBatchUpdate = async () => {
  await todolistStore.batchUpdateTodo();
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
