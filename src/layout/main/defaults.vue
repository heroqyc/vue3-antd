<template>
  <a-layout class="layout-container">
    <Aside />
    <a-layout class="layout-center" :class="{ 'layout-backtop': !isFixedHeader }">
      <Header v-if="isFixedHeader" />
      <div>
        <Header v-if="!isFixedHeader" />
        <Main />
      </div>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import Aside from '/@/layout/component/aside.vue';
  import Header from '/@/layout/component/header.vue';
  import Main from '/@/layout/component/main.vue';

  const isFixedHeader = true;
</script>

<style scoped></style>
