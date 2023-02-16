<template>
  <div>
    <p>不常用的通信方式 ： $attrs</p>
    <!-- 单独传 -->
    <Child
      :person="person"
      :hobby="hobby"
      :num="num"
      @say="say"
      @handleName="handleName"
    >
    </Child>
    <hr />
  </div>
</template>
<script lang="ts">
import Child from './Child.vue';

export default {
  name: 'App',
  components: { Child },
  data() {
    return {
      person: {
        name: '张三',
        age: 30,
        address: '深圳',
      },
      num: 1,
      hobby: ['吃饭', '唱歌', '逛街'],
    };
  },
  methods: {
    say() {
      console.log('你好');
    },
    handleName() {
      console.log('handleName');
    },
  },
};
</script>
