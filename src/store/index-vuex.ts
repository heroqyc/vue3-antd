// import { InjectionKey } from 'vue';
// import { createStore, Store, useStore as baseUseStore } from 'vuex';
// import { RootStateTypes } from './interface';
//
// //  vite Glob导入
// const modulesFiles = import.meta.globEager('./modules/*.ts');
// const pathList: string[] = [];
//
// for (const path in modulesFiles) {
//   pathList.push(path);
// }
//
// const modules = pathList.reduce((modules: { [x: string]: any }, modulePath: string) => {
//   const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
//   const value = modulesFiles[modulePath];
//   modules[moduleName] = value.default;
//   return modules;
// }, {});
//
// // 定义 injection key
// export const key: InjectionKey<Store<RootStateTypes>> = Symbol();
//
// export const store = createStore<RootStateTypes>({ modules });
//
// // 定义自己的 useStore 组合式函数
// export function useStore() {
//   return baseUseStore(key);
// }
