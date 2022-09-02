<template>
  <div class="login-scan-container">
    <div ref="qrcodeRef"></div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import QRCode from 'qrcodejs2-fix';

  const qrcodeRef = ref<HTMLElement | null>(null);

  const initQrcode = () => {
    (qrcodeRef.value as HTMLElement).innerHTML = '';
    new QRCode(qrcodeRef.value, {
      text: '扫码登录扫码登录扫码登录扫码登录扫码登录扫码登录扫码登录扫码登录',
      width: 260,
      height: 260,
      colorDark: '#000000',
      colorLight: '#ffffff',
    });
  };

  onMounted(() => {
    initQrcode();
  });
</script>

<style lang="scss" scoped>
  .login-scan-animation {
    opacity: 0;
    animation-name: error-num;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  .login-scan-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    @extend .login-scan-animation;
    animation-delay: 0.1s;

    // 弃用了 >>> /deep/ ::v-deep 使用 ::v-deep() || :deep()
    :deep(img) {
      margin: auto;
    }
  }
</style>
