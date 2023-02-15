<template>
  <div>
    <!-- vue3组件通信 --- props  父--子 -->
    <Home :list="list"></Home>
    <hr />

    <!-- vue3组件通信---自定义事件  子---父   -->
    <!-- vue3给组件绑定的事件默认都是dom事件。dom事件存在click点击事件，因此会触发 -->
    <p>自定义事件----绑定dom事件</p>
    <Sonemit @click="say"></Sonemit>
    <hr />
    <!-- 
       注意： 
      dom不存在updateAge事件，因此不会触发。
      需要在子组件中的 emits 声明接收，然后通过 this.$emit('xxx'，data) 触发
    -->
    <p>自定义事件---绑定自定义事件</p>
    <p>{{ age }}</p>
    <Sonemit @updateAge="updateAge"></Sonemit>
  </div>
</template>
<script lang="ts">
import Home from './home.vue';
import Sonemit from './sonemit.vue';

export default {
  name: 'App',
  components: { Home, Sonemit },
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      age: 20,
    };
  },
  methods: {
    say() {
      console.log('hi');
    },
    updateAge(value: number) {
      console.log('收到了修改信息', value);
      this.age += value;
    },
  },
};
</script>
<style scoped></style>
