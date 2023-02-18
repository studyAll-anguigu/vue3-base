import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      person: {
        firstName: '张',
        lastName: '三',
        age: 20,
        address: ' 深圳',
      },
    };
  },
  getters: {
    fullName(state){
      return state.person.firstName + state.person.lastName
    }
  },
  actions:{
    addAge(){
      this.person.age++
    }
  }
});
