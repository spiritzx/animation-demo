<!--
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-09 16:34:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-10 11:43:35
-->
<!--
 * @Descripttion:  hover 阴影
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-09 15:29:42
-->
<template>
  <a href="javascript:;" class="hover-border">
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
      default: "borderTB"
    }
  }
};
</script>

<style lang="less" scoped>
.hover-border {
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
.btn-content:hover::after {
  transform: scaleX(1);
}
.btn-content:hover::before {
  transform: scaleX(1);
}
.btn-content::after {
  content: " ";
  width: 100%;
  height: 2px;
  background: #008;
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
.btn-content::before {
  content: " ";
  width: 100%;
  height: 2px;
  background: #008;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition-duration: 0.3s;
  transition-property: transform;
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
