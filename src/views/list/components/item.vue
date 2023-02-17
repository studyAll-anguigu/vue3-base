<template>
  <li>
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>
</template>
<script lang="ts">
export default {
  name: 'Item',
};
</script>
<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import type { TodoItem } from '../../../type';
// 声明就接受属性
const props = defineProps<{
  todo: TodoItem;
}>();

// 声明接收自定义事件,返回自定义事件回调函数.
// 注意接收到的事件名一定要借助调试工具里面看名字是什么。
// 这里前面有个on，是因为在list组件直接使用v-on='$attrs',这样会自动在事件名前面加一个on。
// 然后到了这里再监听一下的话，就会再次再前面加一个 on
const emit = defineEmits(['onUpdateOneChecked']);

// 定义一个计算属性。可读可写（对象形式）
const isChecked = computed({
  get() {
    return props.todo.isDone;
  },
  set() {
    emit('onUpdateOneChecked', props.todo.id);
  },
});
</script>
<style scoped lang="less">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background: #eee;
  button {
    display: block;
  }
}
</style>
