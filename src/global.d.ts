/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-12 10:13:29
 * @LastEditTime: 2022-08-16 09:35:37
 */
declare module '*.tsx' {
  import type { DefineComponent } from 'vue';

  export interface GlobalComponents {
    ZButton: typeof import('./entry')['ZButton'];
  }

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  export interface GlobalComponents {
    ZButton: typeof import('./entry')['ZButton'];
  }
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
