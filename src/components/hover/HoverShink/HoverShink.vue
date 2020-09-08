<!--
 * @Descripttion:  hover 缩小
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 15:47:48
-->
<template>
  <a href="javascript:;" class="hover-shink">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "shink"
    }
  }
};
</script>

<style lang="less">
.hover-shink {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
}
.hover-shink:hover {
  animation: Shink 0.4s ease-in-out;
  color: #000;
  animation-fill-mode: forwards;
}
@keyframes Shink {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
