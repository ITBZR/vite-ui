/*
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-12 11:33:42
 * @LastEditTime: 2022-08-12 11:36:28
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // vue(),
        // 添加JSX插件
        vueJsx(),
        Unocss(),
    ],
});