import { defineStore } from 'pinia';
import { UserInfosState, UserInfosStates } from '/@/store/interface';

/**
 * @description 初始化用户信息
 */
export const useUserInfo = defineStore('userInfo', {
  state: (): UserInfosStates => ({
    userInfos: {
      authBtnList: [],
      photo: '',
      userName: '',
      roles: [],
      time: 0,
    },
  }),
  actions: {
    setUserInfo(data?: UserInfosState) {
      this.userInfos = <any>data;
    },
  },
});
