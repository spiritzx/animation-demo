<!--
 * @Descripttion:  hover 阴影
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 17:29:18
-->
<template>
  <a href="javascript:;" class="hover-shadow">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "shadow"
    }
  }
};
</script>

<style lang="less">
.hover-shadow {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
  transform: translateZ(0);
  transform-origin: 100% 0;
}
.hover-shadow:hover {
  animation: Shadow 1s ease-in-out;
  color: #000;
  animation-fill-mode: forwards;
}
@keyframes Shadow {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-15px);
  }
}
</style>
