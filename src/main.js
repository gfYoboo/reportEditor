import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import ElIcon from './plugins/ElIcon';
import request from '@/utils/request';
import './assets/style.css';

const app = createApp(App);
app.config.globalProperties.$http = request;
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(ElIcon);
app.mount('#app');
