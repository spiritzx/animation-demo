<!--
 * @Descripttion:  hover 阴影
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-09 15:29:42
-->
<template>
  <a href="javascript:;" class="hover-shadow">
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

<style lang="less">
.hover-shadow {
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
.hover-shadow:hover .btn-content {
  animation: Shadow 2s ease-in-out infinite;
  color: #000;
  animation-fill-mode: forwards;
}

.hover-shadow:hover::after {
  position: absolute;
  content: " ";
  width: 80%;
  height: 6px;
  left: 10%;
  bottom: -10px;
  border-radius: 50%;
  background-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  animation: showShadow 2s infinite;
  // box-shadow: 0px 1px 0px #333;
}
@keyframes Shadow {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(-8px);
  }
}
@keyframes showShadow {
  0% {
    opacity: 1;
    height: 8px;
  }
  49% {
    opacity: 0.2;
    height: 4px;
  }
  51% {
    opacity: 0.2;
    height: 4px;
  }
  100% {
    opacity: 1;
    height: 8px;
  }
}
</style>
