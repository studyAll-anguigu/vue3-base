import { createApp } from "vue";
import App from './App.vue'

// 引入store
// 名字可以随便取
import store from './store/index' 

createApp(App).use(store).mount('#app')