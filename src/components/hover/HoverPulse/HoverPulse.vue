<!--
 * @Descripttion: hover 脉冲
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 16:17:49
-->
<template>
  <a href="javascript:;" class="hover-pulse">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "pulse"
    }
  }
};
</script>

<style lang="less">
.hover-pulse {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
}
.hover-pulse:hover {
  animation: Pulse 0.8s infinite ease-in-out;
  color: #000;
  animation-fill-mode: forwards;
}
@keyframes Pulse {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
