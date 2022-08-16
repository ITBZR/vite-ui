/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-16 09:41:09
 * @LastEditTime: 2022-08-16 10:12:37
 */
import { readdirSync, lstatSync, outputFile } from 'fs-extra';
import { resolve } from 'path';
import { config } from '../vite.config';
import { build, InlineConfig, defineConfig, UserConfig } from 'vite';

const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // await build(defineConfig({}))
  const srcDir = resolve(__dirname, '../src/');

  readdirSync(srcDir)
    .filter(name => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = resolve(srcDir, name);
      const isDir = lstatSync(componentDir).isDirectory();
      return isDir && readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async name => {
      const outDir = resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: resolve(srcDir, name),
          name,
          fileName: 'index',
          formats: [`es`, `umd`],
        },
        outDir,
      };
      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);
      outputFile(
        resolve(outDir, `package.json`),
        `{
          "name": "smarty-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js",
        }`,
        `utf-8`,
      );
    });
};
buildAll();
