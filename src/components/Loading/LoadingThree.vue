<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 15:38:32
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-three">
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
.loading-three {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-origin: 50%;
  animation: three 2s linear infinite;
}
.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #fff;
  position: absolute;
}
.dot-one {
  left: 0;
  top: 0;
}
.dot-two {
  right: 0;
  top: 0;
}
.dot-three {
  left: 50%;
  bottom: 0;
  margin-left: -8px;
}
@keyframes three {
  0% {
    transform: rotate(0);
    width: 80px;
    height: 80px;
  }
  50% {
    transform: rotate(180deg);
    width: 40px;
    height: 40px;
  }
  100% {
    transform: rotate(360deg);
    width: 80px;
    height: 80px;
  }
}
</style>
