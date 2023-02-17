<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked" />
    </label>
    <span>
      <span>已完成 {{ isDoneTotal }}</span> / 全部 {{ total }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
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
const emit = defineEmits(['updateAllChecked']);

// 是否全选
const isAllChecked = computed({
  get() {
    return props.isDoneTotal === props.total && props.total > 0;
  },
  set(target) {
    emit('updateAllChecked', target);
  },
});
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
