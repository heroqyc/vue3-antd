<template>
  <!--  <component :is="layout" />-->
  <defaults />
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue';
  // let layout = 'defaults';
  const defaults = defineAsyncComponent(() => import('/@/layout/main/defaults.vue'));
</script>
