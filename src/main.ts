import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from '/@/router/index';
// import { store, key } from '/@/store/index-vuex';
import 'ant-design-vue/dist/antd.css';
import '/@/theme/index.scss';
import { i18n } from '/@/i18n';
import pinia from '/@/store/index';
createApp(App).use(router).use(Antd).use(i18n).use(pinia).mount('#app');
