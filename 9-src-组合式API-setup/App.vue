<template>
  <h1>组合式IPI</h1>

  <h3>使用ref定义的响应式数据</h3>
  <p>{{ num }}</p>
  <button @click="num++">+1</button>
  <button @click="updateNum">+1</button>
  <hr />

  <h3>访问reactive定时的响应式数据</h3>
  <p>{{ person }}</p>
  <button @click="updatePerson">更新name</button>
  <hr />

  <h3>计算属性</h3>
  <p>{{ personInfo }}</p>
  <hr />

  <h3>监视属性</h3>
  <p>监视整个对象：{{ watchPersonObj }}</p>
  <p>监视对象中某个属性：{{ watchPersonAge }}</p>
  <hr />

  <h3>组件通信</h3>
  <Son :person="person" :numToson="numToson" @handleClick="handleClick"></Son>
</template>

<script lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import Son from './views/son.vue';
export default {
  name: 'App',
  setup() {
    console.log('setup');

    // 一、定义响应式数据
    /**
     * 方法1： ref ： 定义单个数
     * - 修改数据： 在js中修改ref定义的数据时，需要加value获取它的值。  xxx.value
     * - 模板中访问： 不需要加 value
     * */
    let num = ref(0); // 0是初始值 。类似react中的useState()
    const updateNum = () => {
      num.value++;
    };

    /**
     * 方法2： reactive ： 定义多个响应式数据
     * */
    interface Person {
      person1: {
        name: String;
        age: Number;
        addres: String;
      };
      hobby: string[];
    }
    const person = reactive<Person>({
      person1: {
        name: '张三',
        age: 30,
        addres: '深圳',
      },
      hobby: ['逛街', '唱歌'],
    });
    const updatePerson = () => {
      person.person1.name = '李四';
    };

    // 二、计算属性
    const personInfo = computed(() => {
      return person.person1.name + person.person1.age;
    });

    // 三、监视属性
    // 1、监视整个对象，只要对象中的某个数据变了，就会触发监听
    const watchPersonObj = watch(person, (newVal, oldVal) => {
      console.log('监听整个对象', oldVal, newVal);
    });
    // 2、监视对象中某个属性
    const watchPersonAge = watch(
      // () => person.person1.age,  如果属性是深层次的属性时，这样写法时监听不到的
      person,
      (newval, oldVal) => {
        console.log('监听对象中某个属性', newval, oldVal);
      }
    );

    // 四、组件通信
    // 1、props
    const numToson = ref(0);
    // 2、自定义事件
    const handleClick = () => {
      console.log('click');
    };

    // 必须要暴露出去才能使用
    return {
      num,
      updateNum,
      person,
      updatePerson,
      personInfo,
      watchPersonObj,
      watchPersonAge,
      handleClick,
    };
  },
  components: {
    Son,
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
};
</script>

<!-- 
  总结：
  组合式API ： setup里面定义
  - setup ： 相当于beforeCreate created声明周期
  执行顺序：setup在beforeCreate之前就执行。
  定义数据：
  - ref : 定义单个数据 。 一般用于定义普通数据
  - reactive :  定义多个数据 。 一般定义表单项数据。因为在表单中可能存在多个数据

 -->
