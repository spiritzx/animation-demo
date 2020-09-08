<!--
 * @Descripttion: 导航
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 14:49:42
-->
<template>
  <div class="home">
    <h1 class="title">项目导航</h1>
    <ul class="nav-wrap">
      <li class="nav-item">
        <router-link to="/cutover">1. 切换动画</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hover">2. hover特效</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import url("../style/common.less");

.nav-wrap {
  list-style: none;
  text-align: left;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
.nav-item {
  width: 50%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
</style>
