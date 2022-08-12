/*
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-11 17:44:59
 * @LastEditTime: 2022-08-12 09:48:27
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"
import Unocss from './config/unocss'

// https://vitejs.dev/config/

const rollupOptions = {
    // 声明全局变量
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        Unocss()
    ],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "ZzsUI",
            fileName: "zzs-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    },
    
});