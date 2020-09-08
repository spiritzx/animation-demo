<!--
 * @Descripttion:  hover 上下摆动
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 16:52:15
-->
<template>
  <a href="javascript:;" class="hover-wobble-v">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Wobble-V"
    }
  }
};
</script>

<style lang="less">
.hover-wobble-v {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
}
.hover-wobble-v:hover {
  animation: wobbleV 0.8s ease-in;
  color: #000;
}
@keyframes wobbleV {
  16.65% {
    transform: translateY(12px);
  }
  33.33% {
    transform: translateY(-10px);
  }
  49.95% {
    transform: translateY(6px);
  }
  66.6% {
    transform: translateY(-5px);
  }
  83.25% {
    transform: translateY(3px);
  }
  94.2% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
