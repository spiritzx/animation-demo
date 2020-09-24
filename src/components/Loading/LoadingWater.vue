<!--
 * @Descripttion: 水波动效
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-14 11:38:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-24 11:26:38
-->
<template>
  <div class="loadding-wrap">
    <div class="loading-water">
      <div class="water-box">
        <div class="water-cover"></div>
      </div>
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
.loading-water {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 2px;
  overflow: hidden;
}
.water-box {
  width: 76px;
  height: 76px;
  background: rgb(47, 141, 204);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.water-cover {
  width: 120px;
  height: 120px;
  position: absolute;
  background: #fff;
  border-radius: 40%;
  bottom: 0px;
  left: 50%;
  margin-left: -60px;
  animation: pullWater 5s infinite;
}
@keyframes pullWater {
  0% {
    bottom: 0;
    transform: rotate(0deg);
  }
  100% {
    bottom: 80px;
    transform: rotate(360deg);
  }
}
</style>
