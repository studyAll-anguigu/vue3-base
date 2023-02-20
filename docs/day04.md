# day04

## pinia

官方文档：https://pinia.vuejs.org/zh/getting-started.html

与 vuex 比较的特点：

1. 没有 mutations
2. Typescript 支持友好，强大的类型推断
3. 不要汇总 modules
4. ...

### 1. 下载 pinia

```
npm i pinia
```

### 2. 配置 pinia

1. 定义 pinia 主模块

```ts
// store/index.ts
import { createPinia } from "pinia";

export default createPinia();
```

2. 在 main.ts 中安装&应用

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

createApp(App).use(store).mount("#app");
```

### 3. 定义 pinia 的模块

```ts
import { defineStore } from "pinia";

interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

type TodoList = TodoItem[];

interface CounterStore {
  count: number;
  age: number;
  todoList: TodoList;
}

export const useCounterStore = defineStore(
  "counter", // 模块名称：将来会在开发者调试工具中显示
  {
    // state必须写成函数形式，函数必须返回一个对象
    // 对象就是整个模块管理的数据
    state: (): CounterStore => {
      return {
        // 基本类型不需要定义类型
        count: 0,
        age: 18,
        // 但是一旦有引用数据类型，就需要定义类型
        todoList: [],
      };
    },
    // 只读的计算属性数据
    getters: {
      oddOrEven(state) {
        // return state.count % 2 === 1 ? "奇数" : "偶数";
        return (state.count & 1) === 1 ? "奇数" : "偶数";
      },
    },

    // 所有更新都要在action中完成
    actions: {
      // action接受n个参数，这n个参数都是外面传递的参数
      increment(...args: number[]) {
        console.log(args);
        // 所有数据（state、getters、actions）都进行了数据代理，代理到this上，所以可以通过this直接访问
        this.count++;
      },
    },

    // pinia移除了mutation
    // mutations: {}
  }
);
```

### 4. 组件使用

1. 引入使用

```js
import { useCounterStore } from "./store/modules/counter";

const counterStore = useCounterStore();
```

2. 读取数据

```js
// 注意：数据解构会失去响应式
// 读取state
counterStore.count;
// 读取getters
counterStore.oddOrEven;
```

3. 更新数据

```js
// 1. 直接更新数据
counterStore.count++;
// 2. 更新多个数据
counterStore.$patch({
  count: counterStore.count + 1,
  xxx: xxx,
});
// 3. 通过action更新数据(一般需要发送请求才会定义action函数)
counterStore.increment(1);
```

## TodoList

### 1. 搭建静态组件

略

### 2. 定义接口函数&类型

1. 下载包

```
npm i axios
```

2. 定义接口函数

```ts
// api/index.ts
import axios from "axios";

// 1. 获取所有todoList
export const getTodoListApi = () => {
  return axios.get("/api/todoList");
};
```

3. 定义接口函数类型

```ts
// api/types.ts
export interface TodoItem {
  _id: string; // mongodb添加的id默认是_id
  title: string;
  isDone: boolean;
}

export type TodoList = TodoItem[];

export interface ResponseType<T> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
```

4. 接口函数使用类型

```ts
import axios from "axios";
import type { ResponseType, TodoList } from "./types";

// 1. 获取所有todoList
export const getTodoListApi = () => {
  return axios.get<ResponseType<TodoList>>("http://localhost:3000/todoList");
};
```

### 3. 定义 pinia 模块

1. 定义 pinia 主模块

```ts
// store/index.ts
import { createPinia } from "pinia";

export default createPinia();
```

2. 应用 store

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

import "./styles/common.css";

createApp(App).use(store).mount("#app");
```

3. 定义 pinia 其他模块

```ts
import { defineStore } from "pinia";

import type { TodoList } from "../../api/types";

interface TodoListStore {
  todoList: TodoList;
}

export const useTodoListStore = defineStore("todoList", {
  state: (): TodoListStore => {
    return {
      todoList: [],
    };
  },
  getters: {},
  actions: {},
});
```

4. 定义发送请求更新数据的 action

```ts
import { getTodoListApi } from "../../api";

actions: {
  async getTodoList() {
    const res = await getTodoListApi();
    this.todoList = res.data.data;
  },
},
```

### 4. 组件使用 pinia

1. 发送请求，获取数据

```ts
// List组件
import { onMounted } from "vue";

import { useTodoListStore } from "../../store/modules/todoList";

const todoListStore = useTodoListStore();
// 谁要数据展示，谁负责发送请求
onMounted(() => {
  todoListStore.getTodoList();
});
```

2. 数据展示

```vue
<Item v-for="todo in todoListStore.todoList" :key="todo._id" :todo="todo" />
```

```ts
import type { TodoItem } from "../../../api/types";

defineProps<{
  todo: TodoItem;
}>();
```

```vue
<input type="checkbox" :checked="todo.isDone" />
<span>{{ todo.title }}</span>
```

### 5. 解决跨域

文档：https://cn.vitejs.dev/config/server-options.html#server-proxy

1. 配置 vite.config.ts

```ts
server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径，去掉/api
      },
    },
  },
```

2. 修改请求地址

```ts
// 1. 获取所有todoList
export const getTodoListApi = () => {
  return axios.get<ResponseType<TodoList>>("/api/todoList");
};
```

## vue-router

### 1. 基本使用

1. 下载

```
npm i vue-router
```

2. 配置

```ts
// router/index.ts
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import Home from "../views/Home/index.vue";
import About from "../views/About/index.vue";

const router = createRouter({
  // 路由模式：
  history: createWebHistory(), // history模式
  // history: createWebHashHistory(), // hash模式
  // 路由配置项
  routes: [
    {
      path: "/home",
      component: Home,
      name: "Home",
      children: [],
      meta: {},
    },
    {
      path: "/about",
      component: About,
      name: "About",
    },
    {
      // 匹配任意地址
      path: "/:pathMatch(.*)*",
      redirect: "/home",
    },
  ],
});

export default router;
```

```ts
// main.ts
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
```

3. 渲染路由组件

```html
<router-view />
```

### 2. 路由跳转两种方式

1. 声明式导航

```html
<router-link to="/xxx">xxx</router-link>
```

2. 编程式导航

```ts
import { useRouter } from "vue-router";
const router = useRouter();
router.push("/xxx");
```

### 3. 路由传参

1. params

- 配置 params 占位符

```ts
{
  name: "Detail",
  path: "/detail/:id",
  component: Detail,
},
```

- 跳转路由，传递 params 参数

```js
const goDetail = () => {
  // router.push({
  //   name: "Detail", // 对象形式，params参数必须使用name不能用path
  //   params: {
  //     id: 123,
  //   },
  // });
  router.push("/detail/123");
};
```

- 获取参数

```ts
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
```

2. query

- 传递参数

```js
const goAbout = () => {
  router.push({
    name: "About",
    query: {
      name: "jack",
      age: 18,
    },
  });
};
```

- 获取参数

```ts
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.query);
```

3. meta

- 配置参数

```ts
{
  name: "Home",
  path: "/home",
  component: Home,
  meta: {
    title: "首页",
  },
},
```

- 获取参数

```ts
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.meta);
```

### 4. 路由导航守卫

1. 全局路由导航守卫

- 全局前置路由导航守卫

```js
router.beforeEach((to, from, next) => {});
```

- 作用：权限控制（控制用户的访问权限）

2. 路由独享导航守卫
3. 组件独享导航守卫

### 5. 缓存路由组件

```html
<router-view>
  <template v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </template>
</router-view>
```

被 keep-alive 缓存的组件多两个生命周期函数 onActivated, onDeactivated

### 6. 路由过渡

```html
<router-view>
  <template v-slot="{ Component }">
    <transition name="fade">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </template>
</router-view>
```

```css
/* 隐藏到显示 */
.fade-enter-from {
}
.fade-enter-active {
}
.fade-enter-to {
}
/* 显示到隐藏 */
.fade-leave-from {
}
.fade-leave-active {
}
.fade-leave-to {
}
```

## element-plus

### 1. 完整引入

1. 下载

```
npm i element-plus
```

2. 配置

```ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

// 全局注册所有element-plus组件
createApp(App).use(ElementPlus).mount("#app");
```

3. 使用

```vue
<el-button type="primary">按钮</el-button>
```

### 2. 按需引入

1. 下载

```
npm i element-plus
```

```
npm i unplugin-auto-import unplugin-element-plus unplugin-vue-components -D
```

2. 配置

```ts
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

plugins: [
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ElementPlus({}), // 按需导入样式
],
```

3. 使用

```vue
<template>
  <el-button type="primary">按钮</el-button>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
</script>
```
