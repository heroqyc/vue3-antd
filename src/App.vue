<template>
  <a-config-provider :locale="state.i18nLocale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
  import { reactive, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useThemeConfig } from '/@/store/themeConfig';
  import { useI18n } from 'vue-i18n';

  const { messages } = useI18n();
  const { themeConfig } = storeToRefs(useThemeConfig());
  const state = reactive({
    i18nLocale: messages.value[themeConfig.value.globalI18n],
  });

  watch(
    () => themeConfig.value.globalI18n,
    (newValue) => {
      console.log('newValue', newValue);
      // state.i18nLocale = messages.value[newValue];
    },
  );
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
