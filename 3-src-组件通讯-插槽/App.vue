<template>
  <div>
    <p>app</p>
    <Child>
      <!-- 默认插槽 三个板块都会在child组件中作显示在 <slot></slot> -->
      <div>标题</div>
      <div>内容区</div>
      <div>footer</div>
    </Child>
    <hr />

    <Child2>
      <!-- 具名插槽：
        起名字需要在template标签上命名
        推荐使用vue3提供指令 v-slot:slotName
        当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 <template> 节点都被隐式地视为默认插槽的内容。
      -->
      <template v-slot:header>
        <div>header:标题</div>
      </template>

      <!-- 如果已存在template，且是默认插槽时，没有包含在改template的其他dom元素会被忽略 -->
      <!-- <div>导航栏</div> -->
      <template v-slot:default>
        <div>defalut</div>
        <div>你好</div>
      </template>

      <!-- 默认插槽，会显示在默认插槽出口 #是v-slot指令的简写 -->
      <template #main>
        <div>main:内容区</div>
      </template>
      <template v-slot:footer>
        <div>footer</div>
      </template>
    </Child2>
    <hr />

    <!-- 作用域插槽 ： 父组件需要获取子组件的数据时，就需要用到作用域插槽 -->
    <Child3 v-slot="data">
      <!-- 接收整个对象 --->
      <p>{{ data }}</p>
      <p>{{ data.num }}</p>
    </Child3>
    <!-- 解构：只要我们需要的数据 -->
    <Child3 v-slot="{ num }">{{ num }}</Child3>
    <hr />

    <!-- v-slot简写 -->
    <Child4>
      <!-- 完整写法 -->
      <template v-slot:main="slotProps">
        <p>
          {{ slotProps }}
        </p>
      </template>
    </Child4>
    <Child4>
      <!-- 简写 ,并解构需要的数据 -->
      <template #main="{ list }">
        <ul>
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Child4>
  </div>
</template>
<script lang="ts">
import Child from './Child.vue';
import Child2 from './Child2.vue';
import Child3 from './Child3.vue';
import Child4 from './Child4.vue';

export default {
  name: 'App',
  components: { Child, Child2, Child3, Child4 },
  data() {
    return {};
  },
};
</script>
