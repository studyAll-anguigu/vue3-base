// 引入ts 类型 
import type {State,Person} from '../../vuex'
import type {ActionContext} from 'vuex'

export default {
  namespaced:true,
    state:{
      name:'张三',
      age:20
    },
    mutations:{
      ADD_AGE(state:Person,val:number){
        state.age += val
      },
      DE_AGE(state:Person,val:number){
        state.age -= val
      }
    },
    actions:{
      /**
       * xxx(context,data){}
       * ations里面的函数 第一个参数是 context。类型是ActionContext
       * ActionContext接收两个参数：
       *   第一个： 当前模块的state
       *   第二个： 整个vuex的state
       * **/ 
      // 添加年龄
      async addAge({commit}:ActionContext<Person,State>,val:number){
        commit('ADD_AGE',val)
      },
      // 减少年龄
      async deAge({commit}:ActionContext<Person,State>,val:number){
        commit('DE_AGE',val)
      }
    }
}
