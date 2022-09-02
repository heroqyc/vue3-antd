<template>
  <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
    <SubItem />
  </a-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import SubItem from '/@/layout/navMenu/subitem.vue';

  let selectedKeys = ref<string[]>(['1']);
  let openKeys = ref<string[]>(['sub1']);
</script>

<style scoped></style>
