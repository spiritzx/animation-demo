<!--
 * @Descripttion: 水波动效
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-24 11:55:53
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-watch">
      <div class="watch-box">
        <div class="watch-hour"></div>
        <div class="watch-minute"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.loadding-wrap {
  width: 100%;
  height: 100%;
  background: rgba(9, 9, 9, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-watch {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 2px;
  overflow: hidden;
}
.watch-box {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.watch-hour {
  height: 25px;
  width: 4px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 50% 0%;
  animation: pointRotate 10s linear infinite;
  margin-left: -2px;
}
.watch-minute {
  height: 4px;
  width: 50px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0% 50%;
  animation: pointRotate 5s linear infinite;
  margin-top: -2px;
}
@keyframes pointRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
