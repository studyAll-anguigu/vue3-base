<template>
  <h3>动态绑定样式--class- 绑定对象</h3>
  <p :class="{ color: true, color_green: colorObj }">hello word</p>
  <button @click="changeObj">修改</button>
  <hr />

  <h3>动态绑定样式--class- 绑定数组</h3>
  <p :class="[colorArray ? 'color_green' : 'color_red']">hello word</p>
  <button @click="colorArray = !colorArray">更新样式</button>
  <hr />

  <h3>动态绑定样式--class- 绑定字符串</h3>
  <p class="colorString">hello word</p>
  <hr />

  <h3>深度样式 -- 父组件修改子组件样式</h3>
  <p>注意： 需要子组件外面包一层div</p>
  <div>
    <Home />
  </div>
  <hr />

  <h3>v-bind绑定样式</h3>
  <p>deep 深度样式 + v-bind绑定样式</p>
  <div><Home></Home></div>
</template>
<script lang="ts">
import Home from './home.vue';

export default {
  name: 'App',
  components: { Home },
  data() {
    return {
      colorObj: true,
      colorArray: false,
      bindColor: 'purple',
    };
  },
  methods: {
    changeObj() {
      this.colorObj = !this.colorObj;
    },
  },
};
</script>
<style scoped>
.color {
  font-size: 18px;
  font-weight: bold;
}
.color_red {
  color: red;
}
.color_green {
  color: green;
}

.colorString {
  color: yellow;
}

:deep(.home) {
  color: blue;
  font-weight: bolder;
  font-size: 20px;
}

:deep(.bindcss) {
  color: v-bind(bindColor);
  font-size: 30px;
  font-weight: bold;
}
</style>
