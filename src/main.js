import { createApp } from 'vue'
import App from './App.vue'
import axios from '@/axios/config.js';
import "@/assets/css/public.css"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router/config.js'
let app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app')
window.axios = axios;
