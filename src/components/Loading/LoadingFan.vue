<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-17 10:24:12
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-fan">
      <div class="fan fan-one"></div>
      <div class="fan fan-two"></div>
      <div class="fan fan-three"></div>
      <div class="fan fan-four"></div>
    </div>
    <div class="fan-stick"></div>
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
  position: relative;
}
.loading-fan {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: rotateWrap 4s ease-in infinite;
  z-index: 2;
}
.fan {
  background: lightseagreen;
  margin: 0 2px;
  border-radius: 3px;
  box-shadow: 0 0 4px rgba(255, 255, 255, 1);
  position: relative;
  z-index: 2;
}
.fan-stick {
  width: 4px;
  height: 50px;
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  z-index: 0;
  margin-left: -2px;
  border-radius: 2px;
}
.fan-one {
  position: absolute;
  top: 0;
  left: 50%;
  width: 6px;
  height: 50px;
  margin-left: -3px;
}
.fan-two {
  top: 50%;
  right: 0;
  width: 50px;
  height: 6px;
  margin-top: -3px;
  background: rgb(255, 169, 30);
  position: absolute;
}
.fan-three {
  top: 50%;
  right: 0;
  width: 50px;
  height: 6px;
  margin-top: -3px;
  position: absolute;
  background: rgb(0, 255, 221);
  transform: rotate(45deg);
}
.fan-four {
  top: 50%;
  right: 0;
  width: 50px;
  height: 6px;
  margin-top: -3px;
  position: absolute;
  background: rgb(220, 255, 105);
  transform: rotate(-45deg);
}
@keyframes rotateWrap {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(480deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
