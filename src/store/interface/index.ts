// 用户信息
export interface UserInfosState {
  photo: string;
  roles: string[];
  time: number;
  userName: string;
  authBtnList: string[];
}

export interface UserInfosStates {
  userInfos: UserInfosState;
}

// 默认配置
export interface ThemeConfigState {
  globalI18n: string;
}

export interface ThemeConfigStates {
  themeConfig: ThemeConfigState;
}
