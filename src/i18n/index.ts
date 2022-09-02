import { createI18n } from 'vue-i18n';
import zhCN from 'ant-design-vue/es/locale/zh_CN'; //简体中文
import zhTW from 'ant-design-vue/es/locale/zh_TW'; //繁体中文
import enUS from 'ant-design-vue/es/locale/en_US'; //英语

import pagesHomeZhcn from './pages/home/zh_CN';
import pagesHomeZhtw from './pages/home/zh_TW';
import pagesHomeEnus from './pages/home/en_US';

// import { storeToRefs } from 'pinia';
// import { useThemeConfig } from '/@/store/themeConfig';

// 定义语言国际化内容
/**
 * 说明：
 * /src/i18n/lang 下的 ts 为框架的国际化内容
 * /src/i18n/pages 下的 ts 为各界面的国际化内容
 */
const messages = {
  [zhCN.locale]: {
    ...zhCN,
    message: {
      ...pagesHomeZhcn,
    },
  },
  [enUS.locale]: {
    ...enUS,
    message: {
      ...pagesHomeEnus,
    },
  },
  [zhTW.locale]: {
    ...zhTW,
    message: {
      ...pagesHomeZhtw,
    },
  },
};

// 导出
export const i18n = createI18n({
  legacy: false,
  // locale: store.state.themeConfig.themeConfig.globalI18n,
  locale: 'zh-CN',
  fallbackLocale: zhCN.locale,
  messages,
});
