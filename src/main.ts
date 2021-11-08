import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from '@/router/index';
import { store, key } from '@/store/index';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(store, key).use(Antd).mount('#app');
