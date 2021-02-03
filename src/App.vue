<!--
 * @Descripttion: 最外围
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:45
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-02 22:48:30
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="scaleUp">
      <component class="view" :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less">
@import url("./style/reset.less");
@import url("./style/common.less");
@import url("./style/scaleUp.less");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .view {
    margin: 0;
    width: 100%;
    background: #fff;
    min-height: 100vh;
    box-sizing: border-box;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }
}
html,
body {
  background: #999;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
