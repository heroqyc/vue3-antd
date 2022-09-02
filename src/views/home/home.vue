<template>
  <div>
    <h1>{{ t('message.title') }}</h1>
    <button @click="handleLanguageChange('zh-cn')">中文</button>
    <button @click="handleLanguageChange('zh-tw')">中文繁体</button>
    <button @click="handleLanguageChange('en')">英文</button>
  </div>
</template>

<script lang="ts" setup>
  import { useThemeConfig } from '/@/store/themeConfig';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();
  const themeConfug = useThemeConfig();
  const handleLanguageChange = (data) => {
    let config = { ...themeConfug.themeConfig };
    config.globalI18n = data;
    themeConfug.setThemeConfig(config);
    locale.value = data;
  };
</script>

<style lang="scss"></style>
