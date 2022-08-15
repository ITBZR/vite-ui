/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-11 17:44:59
 * @LastEditTime: 2022-08-15 15:16:40
 */

/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

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
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "ZzsUI",
      fileName: "zzs-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
