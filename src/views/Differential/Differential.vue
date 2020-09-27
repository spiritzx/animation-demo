<!--
 * @Descripttion: 差速动画
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-27 11:29:58
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-27 14:44:27
-->
<template>
  <div class="home" ref="viewBox">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box-wrap">
      <div class="box-contetn-1"></div>
      <div class="box-contetn-2"></div>
      <div class="box-contetn-3"></div>
      <div class="box-contetn-4"></div>
      <div class="box-contetn-5"></div>
      <div class="box-contetn-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="less" scoped>
.box1 {
  position: absolute;
  margin-top: 300px;
  width: 100%;
  height: 685px;
  background: #eee;
  z-index: 99;
}
.box2 {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: url("../../assets/imgs/01.jpg");
  background-position: center;
}
.box-wrap {
  position: absolute;
  margin-top: 1738px;
  width: 100%;
  min-height: 600px;
  background: #fff;
  .box-contetn-1 {
    width: 100%;
    height: 700px;
    background: #080;
  }
  .box-contetn-2 {
    width: 100%;
    height: 100vh;
    background: url("../../assets/imgs/01.jpg");
    background-position: center;
    background-attachment: fixed;
  }
  .box-contetn-3 {
    width: 100%;
    height: 700px;
    background: #088;
  }
  .box-contetn-4 {
    width: 100%;
    height: 100vh;
    background: url("../../assets/imgs/02.jpg");
    background-position: center;
    background-attachment: fixed;
  }
  .box-contetn-5 {
    width: 100%;
    height: 600px;
    background: #fff;
  }
  .box-contetn-6 {
    width: 100%;
    height: 500px;
    background: #e10;
  }
}
</style>
