<!--
 * @Descripttion:  hover 斜角偏移
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 10:14:01
-->
<template>
  <a href="javascript:;" class="hover-angle">
    <span class="btn-content">
      {{ text }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "angle"
    }
  }
};
</script>

<style lang="less" scoped>
.hover-angle {
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
  position: relative;
  overflow: hidden;
}
.btn-content {
  display: block;
  width: 100%;
  height: 100%;
  color: #333;
  background: #f1f1f1;
}
.hover-angle::after {
  position: absolute;
  right: -186px;
  bottom: -170px;
  display: block;
  content: " ";
  width: 0;
  height: 0;
  border-right: 170px solid rgba(9, 9, 9, 0.1);
  border-bottom: 170px solid transparent;
  border-top: 170px solid transparent;
  transform: rotate(224deg);
}
.hover-angle:hover::after {
  animation: ShowAngle 0.4s ease-in;
  color: #000;
  animation-fill-mode: forwards;
}

@keyframes ShowAngle {
  0% {
    right: -186px;
  }
  100% {
    right: -30px;
  }
}
</style>
