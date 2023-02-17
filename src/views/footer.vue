<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked" />
    </label>
    <span>
      <span>已完成 {{ isDoneTotal }}</span> / 全部 {{ total }}
    </span>
    <button
      class="btn btn-danger"
      v-show="isDoneTotal"
      @click="handelBatchDelTodo"
    >
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
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps(['isDoneTotal', 'total']);
const emit = defineEmits(['updateAllChecked', 'batchDelTodo']);

// 是否全选
const isAllChecked = computed({
  get() {
    // 已完成 = 总任务 && total>0
    return props.isDoneTotal === props.total && props.total > 0;
  },
  set(target) {
    emit('updateAllChecked', target);
  },
});

// 批量删除todo
const handelBatchDelTodo = () => {
  emit('batchDelTodo');
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
