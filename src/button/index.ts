/*
 * @Descripttion: 按钮
 * @Author: BZR
 * @Date: 2022-08-16 09:20:13
 * @LastEditTime: 2022-08-16 09:38:46
 */
import ZButton from './Button';
import { App } from 'vue';

export { ZButton };

export default {
  install(app: App) {
    app.component(ZButton.name, ZButton);
  },
};
