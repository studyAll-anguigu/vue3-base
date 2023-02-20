# day02

## 样式处理

1. 静态样式

- `class="title"`
- `style="font-size: 20px"`

2. 动态样式

- 动态 class
  - 字符串形式 `:class="xxx"`
  - 对象形式 `:class="{ xxx: true, yyy: false }"`
  - 数组形式 `:class="[ xxx, yyy ]"`
- 动态 style
  - `:style="{ fontSize: xxx }"`
- `v-bind(xxx)`
  - 给样式绑定一个动态的值

3.  让样式只对自己组件元素生效 `scoped`

- 给当前组件所有元素添加一个自定义属性 `data-v-xxx`
  (当前组件的子组件根标签也会添加自定义属性，如果没有根标签就不会了)
- 给当前组件所有样式添加一个属性选择器 `[data-v-xxx]`

4. 需求：在 `scoped` 模块下。父组件需要修改子组件的样式

- 解决：深度样式选择器（用来修改后代组件样式）

```css
/* 写法一 */
.xxx >>> .yyy {
}
/* 写法二 */
.xxx /deep/ .yyy {
}
/* 写法三：推荐使用 */
:deep(.yyy) {
}
```

## 生命周期函数

### 1. vue2

1. 初始化（创建）阶段

- beforeCreate
- created

2. 挂载阶段

- beforeMount
- mounted
  - 发送请求等异步任务

3. 更新阶段

- beforeUpdate
- updated

4. 卸载阶段

- beforeDestroy
  - 清除定时器，解绑事件等收尾工作
- destroyed

5. 其他

- 被 keep-alive 组件缓存的组件，多两个生命周期函数

  - deactivated 失效 （取代 beforeDestroy）
  - activated 激活 （取代 mounted）

- errorCaptured() {} 捕获后代错误产生错误

### 2. vue3

1. 初始化（创建）阶段

- beforeCreate
- created

2. 挂载阶段

- beforeMount
- mounted
  - 发送请求等异步任务

3. 更新阶段

- beforeUpdate
- updated

4. 卸载阶段

- beforeUnmount(改名了)
  - 清除定时器，解绑事件等收尾工作
- unmount(改名了)

5. 其他

- 被 keep-alive 组件缓存的组件，多两个生命周期函数

  - deactivated 失效 （取代 beforeDestroy）
  - activated 激活 （取代 mounted）

- errorCaptured() {} 捕获后代错误产生错误

### 3. 扩展：react

1. react 15 版本生命周期

- 初始化

  - constructor()
  - componentWillMount
  - render
  - componentDidMount

- 更新

  - componentWillReceiveProps
  - shouldComponentUpdate
  - componentWillUpdate
  - render
  - componentDidUpdate

- 卸载
  - componentWillUnmount

2. react 16 以后版本生命周期

- 初始化

  - constructor()
  - static getDerivedStateFromProps() {}
  - render
  - componentDidMount() {}

- 更新

  - static getDerivedStateFromProps() {}
  - shouldComponentUpdate
  - render
  - static getDerivedStateFromError() {}
  - componentDidCatch()
  - static getSnapshotBeforeUpdate() {}
  - componentDidUpdate

- 卸载

  - componentWillUnmount

- 其他（三个废弃的函数）
  - UNSAFE_componentWillMount
  - UNSAFE_componentWillReceiveProps
  - UNSAFE_componentWillUpdate

## 组件间通信

1. 常用

- props
- 自定义事件
- v-model
- 插槽
- vuex
- pinia

2. 不常用

- 全局事件总线（mitt、pubsub）

Vue3 移除三个方法：$on / $once / $off

https://www.npmjs.com/package/mitt

- `$attrs`

  - 包含未声明接受的属性数据，也包含所有自定义事件回调函数
  - 移除了$listeners

- `$refs/$parent`

  - 移除了$children

- provide/inject
  - 用于祖孙组件通信

### 1. props

1. 适用场景：`父 -> 子`
2. 用法：

- 父组件以标签属性方式给子组件传递数据

```vue
<Child :xxx="xxx" />
```

- 子组件声明接受 props

```js
props: {
  xxx: {
    type: Xxx,
    required: true
  }
}
```

- 子组件使用

```js
this.xxx;
```

### 2. 自定义事件

1. 适用场景：`子 -> 父`

2. 概念：

- 给组件绑定的事件，默认都是 DOM 事件
- 除非子组件声明接受事件或事件名不是 DOM 事件名称，才是自定义事件

3. 用法

- 父组件给子组件绑定事件

```vue
<Child @xxx="xxx" />
```

- 子组件声明接受事件

```js
emits: ["xxx"];
```

- 子组件触发事件，执行回调函数，从而更新父组件数据

```js
this.$emit("xxx", 参数1, 参数2);
```

### 3. v-model

1. 适用场景：`父 <-> 子`

2. 用法一

```vue
<!-- 1. 绑定 modelValue 数据 -->
<!-- 2. 绑定 update:modelValue 自定义事件 -->
<Child v-model="xxx" />
```

3. 用法二

```vue
<!-- 1. 绑定 xxx 数据 -->
<!-- 2. 绑定 update:xxx 自定义事件 -->
<Child v-model:xxx="xxx" />
```

### 4. 插槽

1. 适用场景：`父 <-> 子`

- 通信标签数据

2. 用法

- 默认插槽

  - 父组件给子组件传递标签数据

  ```vue
  <Child>
    xxx
  </Child>
  ```

  - 子组件使用标签数据

  ```vue
  <slot />
  ```

- 具名插槽

  具名插槽和默认插槽可以一起使用，并且优先最重要的内容使用默认插槽

  - 父组件给子组件传递标签数据

  ```html
  <Child>
    <template v-slot:xxx> xxx </template>
    <template #yyy> yyy </template>
  </Child>
  ```

  - 子组件使用标签数据

  ```vue
  <slot name="xxx" />
  <slot name="yyy" />
  ```

- 作用域插槽

  - 子组件给 slot 标签传递数据，最终会传递给父组件

    ```html
    <slot :xxx="xxx" />

    <slot name="yyy" :xxx="xxx" />
    ```

  - 父组件接受作用域插槽数据

    ```html
    <Child>
      <!-- 默认插槽使用作用域插槽数据 -->
      <template v-slot="{ xxx }"> xxx </template>
      <!-- 具名插槽使用作用域插槽数据 -->
      <template #yyy="{ xxx }"> yyy </template>
    </Child>
    ```

### 5. vuex

1. 下载 vuex

```
npm i vuex
```

2. 配置 vuex

```ts
// store/index.ts
import { createStore } from "vuex";

const store = createStore({
  modules: {},
});

export default store;
```

```ts
// main.ts
import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

const app = createApp(App);

app.use(store);
// 必须要挂载前应用store
app.mount("#app");
```

3. 定义 vuex 模块

```js
// store/modules/counter.ts
export default {
  namespaced: true,
  state: {},
  getters: {},
  actions: {},
  mutations: {},
};
```

4. 汇总 vuex 模块

```js
// store/index.ts
import { createStore } from "vuex";

import counter from "./modules/counter";

const store = createStore({
  modules: {
    counter,
  },
});

export default store;
```

5. 定义模块具体内容

```js
export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {},
  actions: {
    increment({ commit }, val) {
      commit("INCREMENT", val);
    },
    decrement({ commit }, val) {
      commit("DECREMENT", val);
    },
  },
  mutations: {
    INCREMENT(state, val) {
      state.count += val;
    },
    DECREMENT(state, val) {
      state.count -= val;
    },
  },
};
```

6. 组件使用

```js
// 读取state数据：this.$store.state.模块名称.数据名称
// 读取getters数据：this.$store.getters[模块名称/数据名称]
// 触发action函数: this.$store.dispatch(模块名称/action函数名称, 数据)
// 触发mutation函数: this.$store.commit(模块名称/mutation函数名称, 数据)
```

```js
computed: {
  ...mapState(模块名称, [数据名称]),
  ...mapGetters(模块名称, [数据名称]),
},
methods: {
  ...mapActions(模块名称, [函数名称]),
  ...mapMutations(模块名称, [函数名称]),
}
```

### 6. 给 vuex 添加 ts 支持

文档：https://vuex.vuejs.org/zh/guide/typescript-support.html

1. 定义新的全局类型声明文件

```ts
// vuex.d.ts
import type { Store } from "vuex";

// 旧写法
// interface State {
//   counter: {
//     count: number;
//   }
// }

// 新写法
// counter模块的state类型
export interface Counter {
  count: number;
}
// 整个vuex模块的state类型
export interface State {
  counter: Counter;
}

declare module "@vue/runtime-core" {
  // 声明自己的 store state
  /*
    vuex中state数据类型
      {
        counter: {
          count: 0
        }
      }
  */

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    // State是泛型参数
    // State整个vuex管理所有state数据类型
    $store: Store<State>;
  }
}
```

此时 App.vue 组件就不会报错了

2. vuex 模块类型定义

```ts
import type { ActionContext } from "vuex";
import type { State, Counter } from "../../vuex";

// interface Context<S> extends ActionContext<S, State> {}
// Context<Counter>

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {},
  actions: {
    // ActionContext<当前模块state数据类型, 整个vuex管理所有state数据类型>
    increment({ commit }: ActionContext<Counter, State>, val: number) {
      commit("INCREMENT", val);
    },
    decrement({ commit }: ActionContext<Counter, State>, val: number) {
      commit("DECREMENT", val);
    },
  },
  mutations: {
    INCREMENT(state: Counter, val: number) {
      state.count += val;
    },
    DECREMENT(state: Counter, val: number) {
      state.count -= val;
    },
  },
};
```
