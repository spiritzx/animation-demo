<!--
 * @Descripttion:  hover 阴影
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-09 16:25:19
-->
<template>
  <a href="javascript:;" class="hover-arrow">
    <!-- <i class="arrow-left"></i>
    <i class="arrow-right"></i>
    <i class="arrow-top"></i> -->
    <i class="arrow-bottom"></i>
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
      default: "shadow"
    }
  }
};
</script>

<style lang="less" scoped>
.arrow-bottom {
  width: 0;
  height: 0;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-top: 8px solid #f1f1f1;
  border-bottom: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -4px;
}
.hover-arrow {
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
  position: relative;
}
.btn-content {
  display: block;
  width: 100%;
  height: 100%;
  color: #333;
  background: #f1f1f1;
}
.hover-arrow:hover .btn-content {
  animation: ShowArrow 0.4s ease-in-out;
  color: #000;
  animation-fill-mode: forwards;
}

@keyframes ShowArrow {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-8px);
  }
}
</style>
