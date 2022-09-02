<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <Logo v-if="setShowLogo" />
    <Vertical />
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Vertical from '/@/layout/navMenu/vertical.vue';
  import Logo from '/@/layout/logo/logo.vue';

  let setShowLogo = true;
  let collapsed = ref<boolean>(false);
</script>

<style scoped></style>
