/*
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-12 14:34:42
 * @LastEditTime: 2022-08-12 16:59:14
 */
import DefaultTheme from 'vitepress/theme'
import ZzsUI from '../../../src/entry'
// 插件的组件，主要是demo组件
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import './style/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ZzsUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    }
}