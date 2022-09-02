<template>
  <a-layout-header class="layout-header" :style="{ height: setHeaderHeight }" v-show="!isTagsViewCurrenFull">
    <NavBarsIndex />
  </a-layout-header>
</template>

<script lang="ts" setup>
  import NavBarsIndex from '/@/layout/navBars/index.vue';

  const setHeaderHeight = '80px';
  const isTagsViewCurrenFull = false;
</script>

<style scoped></style>
