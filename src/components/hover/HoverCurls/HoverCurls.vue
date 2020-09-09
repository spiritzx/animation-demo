<!--
 * @Descripttion: hover 卷页
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:22:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-09 15:50:11
-->
<template>
  <a href="javascript:;" class="hover-curls">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Curls"
    }
  }
};
</script>

<style lang="less">
.hover-curls {
  background: #f1f1f1;
  color: #333;
  width: 150px;
  height: 40px;
  display: block;
  line-height: 40px;
  position: relative;
}
.hover-curls::before {
  position: absolute;
  content: "";
  height: 0px;
  width: 0px;
  top: 0;
  left: 0;
  background: white;
  background: linear-gradient(
    135deg,
    white 45%,
    #aaaaaa 50%,
    #cccccc 56%,
    white 80%
  );
  z-index: 1000;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  transition-duration: 0.3s;
  transition-property: width, height;
}
.hover-curls:hover::before {
  width: 20px;
  height: 20px;
}
</style>
