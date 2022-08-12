<!--
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-12 14:28:54
 * @LastEditTime: 2022-08-12 16:35:43
-->
# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
  ``` vue
  <template>
    <div style="margin-bottom:20px;">
      <ZButton color="blue">主要按钮</ZButton>
      <ZButton color="green">绿色按钮</ZButton>
      <ZButton color="gray">灰色按钮</ZButton>
      <ZButton color="yellow">黄色按钮</ZButton>
      <ZButton color="red">红色按钮</ZButton>
    </div>
    <div style="margin-bottom:20px;"
    >
      <ZButton color="blue" plain>朴素按钮</ZButton>
      <ZButton color="green" plain>绿色按钮</ZButton>
      <ZButton color="gray" plain>灰色按钮</ZButton>
      <ZButton color="yellow" plain>黄色按钮</ZButton>
      <ZButton color="red" plain>红色按钮</ZButton>
    </div>
    <div style="margin-bottom:20px;">
      <ZButton size="small" plain>小按钮</ZButton>
      <ZButton size="medium" plain>中按钮</ZButton>
      <ZButton size="large" plain>大按钮</ZButton>
    </div>
    <div style="margin-bottom:20px;">
      <ZButton color="blue" round plain icon="search">搜索按钮</ZButton>
      <ZButton color="green" round plain icon="edit">编辑按钮</ZButton>
      <ZButton color="gray" round plain icon="check">成功按钮</ZButton>
      <ZButton color="yellow" round plain icon="message">提示按钮</ZButton>
      <ZButton color="red" round plain icon="delete">删除按钮</ZButton>
    </div>
    <div style="margin-bottom:20px;">
      <ZButton color="blue" round plain icon="search"></ZButton>
      <ZButton color="green" round plain icon="edit"></ZButton>
      <ZButton color="gray" round plain icon="check"></ZButton>
      <ZButton color="yellow" round plain icon="message"></ZButton>
      <ZButton color="red" round plain icon="delete"></ZButton>
    </div>
  </template>
  ```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

``` vue
<template>
  <div class="flex flex-row">
    <ZButton icon="edit" plain></ZButton>
    <ZButton icon="delete" plain></ZButton>
    <ZButton icon="share" plain></ZButton>
    <ZButton round plain icon="search">搜索</ZButton>
  </div>
</template>
```
::: 