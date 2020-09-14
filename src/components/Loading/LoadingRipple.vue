<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 13:57:47
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-ripple"></div>
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
.loading-ripple {
  width: 0px;
  height: 0px;
  background: #fff;
  border-radius: 50%;
  animation: ripple 1s ease-in infinite;
}
@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 0.75;
  }
  100% {
    width: 80px;
    height: 80px;
    opacity: 0.1;
  }
}
</style>
