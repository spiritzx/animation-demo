<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-23 15:51:37
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-fish">
      <div class="fish fish-one"></div>
      <div class="fish fish-two"></div>
      <div class="fish-three"></div>
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
  position: relative;
}
.loading-fish {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
.fish {
  background: rgb(255, 255, 255);
  margin: 0 2px;
  border-radius: 3px;
  position: relative;
  z-index: 2;
}
.fish-one::after {
  position: absolute;
  content: " ";
  left: 55%;
  top: 50%;
  width: 6px;
  height: 6px;
  background: rgba(9, 9, 9, 0.8);
  border-radius: 50%;
}
.fish-one {
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 20px;
  margin-left: -40px;
  border-radius: 20px 20px 0 0;
  margin-top: 0px;
  animation: rotateWrapTop 1s infinite;
}
.fish-two {
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 20px;
  margin-left: -40px;
  border-radius: 0 0 20px 20px;
  margin-top: 20px;
  animation: rotateWrapBottom 1s infinite;
}
.fish-three {
  top: 50%;
  right: 0;
  width: 10px;
  height: 10px;
  margin-top: -10px;
  position: absolute;
  background: rgb(0, 255, 221);
  border-radius: 50%;
  animation: ballMove 1s infinite;
}

@keyframes rotateWrapTop {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-30deg);
  }
  80% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes rotateWrapBottom {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(30deg);
  }
  80% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes ballMove {
  0% {
    transform: translate(0px);
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  40% {
    transform: translate(-24px);
  }
  85% {
    transform: translate(-24px);
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0px);
  }
}
</style>
