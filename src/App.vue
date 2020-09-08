<!--
 * @Descripttion: 最外围
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:45
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 11:38:33
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
@import url("./style/scaleUp.less");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
