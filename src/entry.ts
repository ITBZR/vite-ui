/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-11 18:01:30
 * @LastEditTime: 2022-08-16 09:38:16
 */
import { App, DefineComponent } from 'vue';
import { ZButton } from './button';

export { ZButton };
const components = [ZButton];

export default {
  install(app: App): void {
    components.forEach(component => {
      app.component((component as unknown as DefineComponent).name, component);
    });
  },
};
