export default {
  namespaced:true,
    state:{
      name:'张三',
      age:20
    },
    mutations:{
      ADD_AGE(state,val){
        state.age += val
      },
      DE_AGE(state,val){
        state.age -= val
      }
    },
    actions:{
      // 添加年龄
      async addAge({commit},val){
        commit('ADD_AGE',val)
      },
      // 减少年龄
      async deAge({commit},val){
        commit('DE_AGE',val)
      }
    }
}
