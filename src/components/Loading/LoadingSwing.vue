<!--
 * @Descripttion: loading 左右摇摆
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-23 17:02:45
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-swing">
      <div class="dot dot-one"></div>
      <div class="dot dot-two"></div>
      <div class="dot dot-three"></div>
      <div class="dot dot-four"></div>
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
.loading-swing {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #fff;
  position: relative;
}
.dot-one {
  animation: one 1.5s ease-in infinite;
}
.dot-four {
  animation: four 1.5s ease-in infinite;
}
@keyframes one {
  0% {
    left: -30px;
    bottom: 10px;
  }
  50% {
    left: 0px;
    bottom: 0px;
  }
  100% {
    left: -30px;
    bottom: 10px;
  }
}
@keyframes four {
  0% {
    left: 0;
    bottom: 0px;
  }
  50% {
    left: 30px;
    bottom: 10px;
  }
  100% {
    left: 0;
    bottom: 0px;
  }
}
</style>
