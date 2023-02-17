<template>
  <div>son</div>
  {{ personData.person1 }}
  <button @click="handle">click</button>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'Son',

  // 声明接收props
  props: {
    person: {
      type: Object,
    },
  },
  emits: ['handleClick'],
  // 通过props接收props属性  context ： 当前组件上下文，接收未声明的props、自定义事件
  setup(props, context) {
    const personData = props.person;
    const handle = () => {
      // 触发自定义事件
      context.emit('handleClick');
    };

    console.log('props:', props);
    console.log('context:', context);
    console.log('son接收到了数据', personData);

    return {
      personData,
      handle,
    };
  },
};
</script>
