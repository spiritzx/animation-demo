<!--
 * @Descripttion: hover 放大
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 15:46:21
-->
<template>
  <a href="javascript:;" class="hover-grow">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "grow"
    }
  }
};
</script>

<style lang="less">
.hover-grow {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
}
.hover-grow:hover {
  animation: Grow 0.4s ease-in-out;
  color: #000;
  animation-fill-mode: forwards;
}
@keyframes Grow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
