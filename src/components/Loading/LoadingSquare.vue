<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-17 10:37:03
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-sequare">
      <div class="sequare sequare-three"></div>
      <div class="sequare sequare-four"></div>
      <div class="sequare sequare-five"></div>
      <div class="sequare sequare-two"></div>
      <div class="sequare sequare-three"></div>
      <div class="sequare sequare-four"></div>
      <div class="sequare sequare-one"></div>
      <div class="sequare sequare-two"></div>
      <div class="sequare sequare-three"></div>
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
.loading-sequare {
  width: 81px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.sequare {
  width: 27px;
  height: 27px;
  background: rgba(216, 216, 216, 1);
}
.sequare-one {
  animation: ripple 1.6s ease-in infinite;
}
.sequare-two {
  animation: ripple 1.6s 0.2s ease-in infinite;
}
.sequare-three {
  animation: ripple 1.6s 0.4s ease-in infinite;
}
.sequare-four {
  animation: ripple 1.6s 0.6s ease-in infinite;
}
.sequare-five {
  animation: ripple 1.6s 0.8s ease-in infinite;
}
@keyframes ripple {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
