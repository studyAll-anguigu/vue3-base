# day01

## 创建 vue3 脚手架两种方式

1. webpack

- npm i @vue/cli -g
- vue create xxx
- 启动项目
  - cd xxx
  - npm run serve

2. vite

https://cn.vitejs.dev/

- npm create vite
- 启动项目
  - cd xxx
  - npm i
  - npm run dev

> 注意：启动 vue3 项目需要安装两个 volar 插件并且关闭 vetur 插件

## data

1. data 写法

- vue2 中能写函数或对象形式（组件只能用函数形式）
- vue3 中只能写函数形式

2. 响应式: 更新数据时，数据变，用户界面也变化

- vue2:
  - 新增数据不是响应式 解决：`this.$set(this.person, 'age', 18) / Vue.set()`
  - 原理：Object.defineProperty
- vue3:
  - data 中数据是响应式的, 并且新增属性也是响应式。删除 `this.$set / Vue.set()` 方法
  - 原理：Proxy

## 监视属性和计算属性

### 1. 监视属性 watch

```js
{
  watch: {
    xxx(newVal, oldVal) {} // 第一次（初始化渲染）不触发
  },
  // 或
  watch: {
    xxx: {
      handler(newVal, oldVal) {},
      deep: true, // 深度监视
      immediate: true // 立即监视（第一次生效，一上来就触发）
    }
  }
}
```

### 2. 计算属性 computed

1. 语法

- 只读

```js
computed: {
  xxx() {}
}
```

- 可读可写

```js
computed: {
  xxx: {
    get() {},
    set() {}
  }
}
```

2.  特点：有缓存

### 3. watch 和 computed 区别：

1. 计算属性有缓存，监视属性没有
2. 计算属性不能进行异步操作，监视属性可以进行异步操作
3. 计算属性一定返回值，监视属性没有

## 指令语法

### 1. 常用指令：

1. v-bind

- 语法：`v-bind:xxx="xxx"`
- 简写：`:xxx="xxx"`
- 作用：单向数据绑定（给标签属性绑定动态的值）

- 其他
  - 修饰符：.sync 用于双向通信（vue2）
  - vue3 移除.sync。

2. v-for

- 语法：`v-for="(item, index) in xxx" :key="item.id"`

  - key 要求：1. 唯一 2. 稳定（更新前后一致）

- 作用：列表渲染

3.  v-on

- 语法：v-on:事件名称="事件回调函数"
- 简写：@事件名称="事件回调函数"
- 作用：绑定事件
- 事件修饰符：

  - `.prevent`
  - `.once`
  - `.stop`
  - .native(vue2 给组件绑定 DOM 事件) vue3 移除.native

- 按钮修饰符
  - `.enter`
  - `.13`

4. v-if/v-else-if/v-else

- 语法：v-if="xxx"

- 作用：条件渲染（让元素显示或隐藏）

- v-for 和 v-if 一起使用，谁优先级更高
  - vue2 中：v-for 更高（不能一起使用）
  - vue3 中：v-if 更高（可以一起使用）

5. v-show

- 语法：v-show="xxx"
- 作用：条件渲染（让元素显示或隐藏）

- v-if 和 v-show 的区别：
  - v-if 隐藏时会销毁元素
  - v-show 通过样式 display:none 来隐藏元素

6. v-model

- 语法：v-model="xxx"
- 作用：双向数据绑定（常用于表单项）

7. v-slot

- 语法：v-slot:xxx v-slot="{ xxx }" v-slot:xxx="{ xxx }"
- 简写：#xxx #default="{ xxx }" #xxx="{ xxx }"
- 作用：父子组件通信，通信的是标签数据

8. v-memo(Vue3 新增)

- 语法：v-memo="[xxx]"

- 作用：用来缓存部分模板页面（DOM 元素）

### 2. 不常用指令：

1. v-html

- 语法：v-html="xxx"
- 作用：设置元素的 innerHTML

2. v-text

- 语法：v-text="xxx"
- 作用：设置元素的 textContent

3. v-once

- 让模板只会解析一次，后面不会解析了

4. v-pre

- 跳过解析，直接将原始内容渲染上去

5. v-cloak

- 用于隐藏尚未完成编译的 DOM 模板。
