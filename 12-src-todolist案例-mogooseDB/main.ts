import { createApp } from "vue";
import App from './App.vue'
import './styles/commond.css'
import store from './store/index'

createApp(App).use(store).mount('#app')