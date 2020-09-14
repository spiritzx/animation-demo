<!--
 * @Descripttion:  hover 斜角偏移
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 11:48:30
-->
<template>
  <a href="javascript:;" class="hover-ripple">
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
      default: "ripple"
    }
  }
};
</script>

<style lang="less" scoped>
.hover-ripple {
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
.hover-ripple::after {
  content: " ";
  height: 150px;
  width: 150px;
  background: rgba(9, 9, 9, 1);
  position: absolute;
  display: inline-block;
  z-index: 1;
  left: 0;
  top: -55px;
  border-radius: 50%;
  transform: scale(0);
}
.hover-ripple:hover::after {
  animation: ShowRipple 1s ease-out;
  color: #000;
}

@keyframes ShowRipple {
  0% {
    transform: scale(0);
    opacity: 0.65;
  }
  30% {
    transform: scale(0);
    opacity: 0.55;
  }
  50% {
    transform: scale(0);
    opacity: 0.35;
  }
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
}
</style>
