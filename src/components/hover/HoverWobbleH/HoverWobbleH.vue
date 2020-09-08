<!--
 * @Descripttion:  hover 左右摆动
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 16:48:41
-->
<template>
  <a href="javascript:;" class="hover-wobble-h">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Wobble-H"
    }
  }
};
</script>

<style lang="less">
.hover-wobble-h {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
}
.hover-wobble-h:hover {
  animation: wobbleH 0.8s ease-in;
  color: #000;
}
@keyframes wobbleH {
  16.65% {
    transform: translateX(12px);
  }
  33.33% {
    transform: translateX(-10px);
  }
  49.95% {
    transform: translateX(6px);
  }
  66.6% {
    transform: translateX(-5px);
  }
  83.25% {
    transform: translateX(3px);
  }
  94.2% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
