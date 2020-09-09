<!--
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-09 16:34:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-09 16:44:08
-->
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
.btn-content::after {
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.btn-content::before {
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
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
