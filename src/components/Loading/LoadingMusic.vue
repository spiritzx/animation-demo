<!--
 * @Descripttion: loading 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 17:33:11
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-music">
      <div class="line line-one"></div>
      <div class="line line-two"></div>
      <div class="line line-three"></div>
      <div class="line line-four"></div>
      <div class="line line-five"></div>
      <div class="line line-six"></div>
      <div class="line line-seven"></div>
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
.loading-music {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  width: 6px;
  height: 50px;
  background: #fff;
  margin: 0 2px;
  border-radius: 3px;
}
.line-one {
  animation: music 1s ease infinite;
}
.line-two {
  animation: music 1s 0.1s ease infinite;
}
.line-three {
  animation: music 1s 0.2s ease infinite;
}
.line-four {
  animation: music 1s 0.3s ease infinite;
}
.line-five {
  animation: music 1s 0.4s ease infinite;
}
.line-six {
  animation: music 1s 0.5s ease infinite;
}
.line-seven {
  animation: music 1s 0.6s ease infinite;
}
// .dot-two {
//   animation: rippleOne 1s ease infinite;
// }
// .dot-three {
//   animation: rippleThree 1s ease infinite;
// }
@keyframes music {
  0% {
    height: 50px;
  }
  50% {
    height: 30px;
  }
  100% {
    height: 50px;
  }
}
</style>
