<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-15 11:07:47
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-eys">
      <div class="dot dot-one"></div>
      <div class="dot dot-two"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.loadding-wrap {
  width: 100%;
  height: 100%;
  background: rgba(3, 3, 3, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-eys {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(216, 216, 216, 1);
  margin: 0 5px;
  position: relative;
}
.dot::after {
  content: " ";
  display: block;
  position: absolute;
  width: 12px;
  height: 12px;
  background: #666;
  border-radius: 50%;
  left: 50%;
  top: 40%;
  animation: eyes 1s ease-out infinite;
}
@keyframes eyes {
  0% {
    transform: translateX(-12px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-12px);
  }
}
</style>
