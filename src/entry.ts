/*
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-11 18:01:30
 * @LastEditTime: 2022-08-12 10:18:12
 */
import { App, DefineComponent } from 'vue'
import ZButton from './button/index.tsx'

export { ZButton }
const components = [ZButton]

export default {
    install(app: App): void {
        components.forEach(component => {
            console.log('component', component);
            app.component((component as DefineComponent).name, component)
        })
    }
}