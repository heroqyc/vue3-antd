<template>
  <div>
    <a-form ref="formRef" class="login-content-form" :model="formState" :rules="rules" @finish="handleFinish" @finish-failed="handleFinishFailed">
      <a-form-item name="phone" class="login-animation1">
        <a-input v-model:value="formState.phone" placeholder="phone" allowClear size="large">
          <template #prefix><PhoneOutlined style="color: rgba(0, 0, 0, 0.25); font-size: 14px" /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="code" class="login-animation2">
        <a-row :gutter="15">
          <a-col :span="16">
            <a-input v-model:value="formState.code" placeholder="code" allowClear size="large">
              <template #prefix>
                <SendOutlined style="color: rgba(0, 0, 0, 0.25); font-size: 14px" />
              </template>
            </a-input>
          </a-col>
          <a-col :span="8">
            <a-button class="login-content-code" size="large"> 获取验证码 </a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item class="login-animation3">
        <a-button class="login-content-submit" type="primary" html-type="submit" block shape="round" size="large"> 登录 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { PhoneOutlined, SendOutlined } from '@ant-design/icons-vue';
  import { reactive } from 'vue';
  import type { UnwrapRef } from 'vue';
  import type { FormProps } from 'ant-design-vue';

  interface FormState {
    phone: string;
    code: string;
  }

  const formState: UnwrapRef<FormState> = reactive({
    phone: '',
    code: '',
  });

  const rules = {
    phone: [
      { required: true, message: 'Please input Activity user', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    code: [{ required: true, message: 'Please input Activity password', trigger: 'blur' }],
  };

  // 数据验证成功
  const handleFinish: FormProps['onFinish'] = (values) => {
    console.log(values, formState);
  };

  // 数据验证失败
  const handleFinishFailed: FormProps['onFinishFailed'] = (errors) => {
    console.log(errors);
  };
</script>

<style lang="scss" scoped>
  .login-content-form {
    margin-top: 20px;
    .login-content-code {
      width: 100%;
      padding: 0;
    }

    @for $i from 1 through 4 {
      .login-animation#{$i} {
        opacity: 0;
        animation-name: error-num;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-delay: calc($i/10) + s;
      }
    }

    :deep(.ant-input-lg) {
      font-size: 14px;
    }

    .login-content-submit {
      width: 100%;
      letter-spacing: 2px;
      font-weight: 300;
      margin-top: 15px;
    }
  }
</style>
