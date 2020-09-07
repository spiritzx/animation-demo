<!--
 * @Descripttion: 导航
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-07 10:17:58
-->
<template>
  <div class="home">
    <h1>项目导航</h1>
    <ul class="nav-wrap">
      <li>
        <router-link to="/cutover">切换动画</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 980px;
  background: #fff;
  min-height: 100vh;
  padding: 16px;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}
.nav-wrap {
  list-style: none;
  text-align: left;
}
</style>
