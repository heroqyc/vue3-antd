<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-content-main">
        <h4 class="login-content-title">vue-antd后台模板</h4>
        <div v-if="!isScan">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="用户名登录">
              <Account />
            </a-tab-pane>
            <a-tab-pane key="2" force-render tab="手机号登录">
              <Mobile />
            </a-tab-pane>
          </a-tabs>
        </div>
        <Scan v-if="isScan" />

        <div class="login-content-main-scan" @click="isScan = !isScan">
          <qrcode-outlined v-if="isScan" :style="IconStyle" />
          <desktop-outlined v-else :style="IconStyle" />
        </div>

        <div class="login-content-main-scan-mask"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { QrcodeOutlined, DesktopOutlined } from '@ant-design/icons-vue';
  import Account from './component/account.vue';
  import Mobile from './component/mobile.vue';
  import Scan from './component/scan.vue';

  let activeKey = ref('1');
  let isScan = ref(false);
  const IconStyle = reactive({ 'font-size': '48px' });
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/bg-login.png');
    background-size: 100% 100%;
    position: relative;

    .login-content {
      width: 500px;
      height: 440px;
      padding: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) translate3d(0, 0, 0);
      background-color: #fff;
      border: 5px solid var(--color-primary-light-8);
      border-radius: 4px;
      overflow: hidden;
      z-index: 1;

      .login-content-main {
        margin: 0 auto;
        width: 80%;

        .login-content-title {
          color: #333;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          letter-spacing: 4px;
          margin: 15px 0 30px;
          white-space: nowrap;
          z-index: 5;
          position: relative;
          transition: all 0.3s ease;
        }

        .login-content-main-scan {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          cursor: pointer;
          transition: all ease 0.3s;
          color: var(--el-text-color-primary);
        }

        .login-content-main-scan-mask {
          position: absolute;
          width: 35px;
          height: 70px;
          top: 2px;
          right: 22px;
          background: #fff;
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>
