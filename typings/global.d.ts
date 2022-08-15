/*
 * @Descripttion: 类型声明
 * @Author: BZR
 * @Date: 2022-08-15 10:27:30
 * @LastEditTime: 2022-08-15 10:29:02
 */
declare module "vue" {
  export interface GlobalComponents {
    ZButton: typeof import("../src/entry")["ZButton"];
  }
}

export {};
