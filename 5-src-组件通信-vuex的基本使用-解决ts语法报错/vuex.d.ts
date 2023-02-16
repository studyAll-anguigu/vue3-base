// vuex.d.ts
import { Store } from 'vuex'

 // 声明自己的 store state
 export interface Person {
  age:number,
  name:string
 }

 export interface State {
  person: Person
}



declare module '@vue/runtime-core' {
 
  // 为 `this.$store` 提供类型声明  这里是固定写法
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}