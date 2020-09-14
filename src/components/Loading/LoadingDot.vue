<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 17:34:35
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-dot">
      <div class="dot dot-one"></div>
      <div class="dot dot-two"></div>
      <div class="dot dot-three"></div>
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
.loading-dot {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(216, 216, 216, 1);
  margin: 0 5px;
}
.dot-one {
  animation: ripple 1s ease infinite;
}
.dot-two {
  animation: ripple 1s 0.3s ease infinite;
}
.dot-three {
  animation: ripple 1s 0.6s ease infinite;
}
@keyframes ripple {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
@keyframes rippleOne {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes rippleThree {
  0% {
    transform: scale(0.75);
  }
  33.3% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.75);
  }
  80% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0.75);
  }
}
</style>
