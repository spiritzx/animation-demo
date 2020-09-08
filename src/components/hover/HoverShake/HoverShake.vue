<!--
 * @Descripttion:  hover 摇动
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 17:12:48
-->
<template>
  <a href="javascript:;" class="hover-shake">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "shake"
    }
  }
};
</script>

<style lang="less">
.hover-shake {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
  transform: translateZ(0);
  transform-origin: 100% 0;
}
.hover-shake:hover {
  animation: Shake 1s ease-in-out;
  color: #000;
  animation-fill-mode: forwards;
}
@keyframes Shake {
  16.6% {
    transform: skew(15deg);
  }
  33.33% {
    transform: skew(-12deg);
  }
  49.95% {
    transform: skew(8deg);
  }
  66.6% {
    transform: skew(-6deg);
  }
  83.25% {
    transform: skew(4deg);
  }
  100% {
    transform: skew(0deg);
  }
}
</style>
