<template>
  <div>child</div>
</template>
<script lang="ts">
// 引入emitter全局事件的对象
import emitter from './utils/mitt';

export default {
  name: 'Child',
  data() {
    return {
      person: {
        name: '张三',
        age: 20,
        sex: 'male',
      },
    };
  },
  mounted() {
    console.log('child mounted');
    // 触发事件(发布数据)
    emitter.emit('person', {
      name: '张三',
      age: 20,
      sex: 'male',
    });
  },
};
</script>
