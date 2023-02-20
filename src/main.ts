import { createApp } from 'vue';
import App from './App.vue';

// 完整引入 elemenui组件库
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);

app.mount('#app');
