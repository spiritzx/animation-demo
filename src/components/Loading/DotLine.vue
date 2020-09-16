<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-15 09:48:54
-->
<template>
  <div class="loadding-wrap">
    <div class="dot-line">
      <div class="line line-one"></div>
      <div class="line line-two"></div>
      <div class="line line-three"></div>
      <div class="line line-four"></div>
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
.dot-line {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: rotateWrap 4s ease infinite;
}
.line {
  background: #fff;
  margin: 0 2px;
  border-radius: 3px;
}
.line-one {
  position: absolute;
  top: 0;
  left: 50%;
  width: 6px;
  height: 50px;
  margin-left: 6px;
  animation: scalingY 2s ease infinite;
}
.line-two {
  top: 50%;
  right: 0;
  width: 50px;
  height: 6px;
  margin-top: 6px;
  position: absolute;
  animation: scalingX 2s ease infinite;
}
.line-three {
  bottom: 0;
  left: 50%;
  width: 6px;
  height: 50px;
  position: absolute;
  margin-left: -12px;
  animation: scalingY 2s ease infinite;
}
.line-four {
  top: 50%;
  left: 0;
  width: 50px;
  height: 6px;
  margin-top: -12px;
  position: absolute;
  animation: scalingX 2s ease infinite;
}

@keyframes scalingY {
  0% {
    height: 6px;
  }
  50% {
    height: 50px;
  }
  100% {
    height: 6px;
  }
}
@keyframes scalingX {
  0% {
    width: 6px;
  }
  50% {
    width: 50px;
  }
  100% {
    width: 6px;
  }
}
@keyframes rotateWrap {
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(210deg);
  }
  100% {
    transform: rotate(390deg);
  }
}
</style>
