import { defineStore } from 'pinia';
import { ThemeConfigState, ThemeConfigStates } from '/@/store/interface';

export const useThemeConfig = defineStore('themeConfig', {
  state: (): ThemeConfigStates => ({
    themeConfig: {
      globalI18n: 'zh-cn',
    },
  }),
  actions: {
    setThemeConfig(data: ThemeConfigState) {
      this.themeConfig = data;
    },
  },
});
