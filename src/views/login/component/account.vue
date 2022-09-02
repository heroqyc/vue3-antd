<template>
  <div>
    <a-form ref="formRef" :model="formState" :rules="rules" class="login-content-form" @finish="handleFinish" @finish-failed="handleFinishFailed">
      <a-form-item name="user" class="login-animation1">
        <a-input v-model:value="formState.user" allowClear placeholder="Username" size="large">
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25); font-size: 14px" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" class="login-animation2">
        <a-input-password v-model:value="formState.password" allowClear placeholder="Password" size="large" type="password">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25); font-size: 14px" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item class="login-animation3">
        <a-button block class="login-content-submit" html-type="submit" shape="round" size="large" type="primary">登录 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import type { UnwrapRef } from 'vue';
  import type { FormProps } from 'ant-design-vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

  interface FormState {
    user: string;
    password: string;
  }

  const formState: UnwrapRef<FormState> = reactive({
    user: 'admin',
    password: '123456',
  });

  const rules = {
    user: [
      { required: true, message: 'Please input Activity user', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [{ required: true, message: 'Please input Activity password', trigger: 'blur' }],
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
