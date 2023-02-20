# day03

## Composition API (组合式)

1. ref

```ts
// 定义数据&类型
// 实际上基本数据类型不需要定义类型，引用数据类型才需要类型
const count = ref<number>(0);
// 模板使用页面直接使用
count;
// js使用必须加.value
count.value;
```

2. reactive

```ts
const person = reactive({
  name: "jack",
  age: 18,
});
// 模板使用页面和js都是直接使用
person.name;
```

- 结论：
  - 一般数据都是用 ref 定义
  - 如果是表单项数据，用 reactive 定义

3. watch

```ts
// 监视整个数据，直接写
watch(xxx, (newVal, oldVal) => {}, { immediate: true, deep: true });
// 监视reactive中某个数据, 需要函数形式
watch(
  () => xxx.xxx,
  (newVal, oldVal) => {},
  { immediate: true, deep: true }
);
```

4. computed

```ts
// 只读
const xxx = computed(() => {});
// 可读可写
const xxx = computed({ get() {}, set() {} });
```

5. 生命周期函数

```ts
setup() {} // setup函数本身相当于 beforeCreate / created
// vue提供了其他生命周期函数，需要引入使用
// 生命周期函数可以定义多个，会依次触发
onMounted(() => {});
onBeforeUnmounted(() => {});
```

6. ref 获取 DOM 元素

- 给 DOM 元素绑定 ref 属性

```html
<h1 ref="xxx">xxx</h1>
```

- 定义 ref 数据

```js
// 要求变量名称xxx，和ref的标识名称xxx必须一致
const xxx = ref();
```

- 使用 DOM 元素

```js
xxx.value;
```

7. setup 函数参数

```js
setup(props, context) {
  // props就是props数据
  // context是一个对象，包含attrs属性和emit方法
}
```

## Composition API 语法糖

1. 使用

```html
<script setup lang="ts"></script>
```

2. 特点

- 定义即暴露
- 引入即注册

3. 其他

- 对于 props 和自定义事件需要格外的函数去声明接受

```js
// 声明接受props数据
const props = defineProps<{
  count: number;
}>();

// 声明接受自定义事件
const emit = defineEmits(["update"]);
```

- 对于组件命名，在没写 name 情况下爱，默认以文件名命名。

```html
<script lang="ts">
  // 为了给组件命名，主要在开发者工具可以查看
  export default {
    name: "Child",
  };
</script>
```
