<!--
 * @Descripttion: hover 特效
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:12:29
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-14 16:56:18
-->
<template>
  <div class="loading">
    <router-link class="title" to="/" type="replace">Loading特效</router-link>
    <div class="loading-item">
      <div class="loading-wrap">
        <loading-ripple></loading-ripple>
        <loading-dot></loading-dot>
        <loading-matrix></loading-matrix>
        <loading-three></loading-three>
        <loading-music></loading-music>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingRipple from "@/components/Loading/LoadingRipple";
import LoadingDot from "@/components/Loading/LoadingDot";
import LoadingMatrix from "@/components/Loading/LoadingMatrix";
import LoadingThree from "@/components/Loading/LoadingThree";
import LoadingMusic from "@/components/Loading/LoadingMusic";

export default {
  components: {
    LoadingRipple,
    LoadingDot,
    LoadingMatrix,
    LoadingThree,
    LoadingMusic
  }
};
</script>

<style lang="less">
@import url("../../style/common.less");
.loading-item {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  .loading-title {
    font-size: 24px;
    margin-bottom: 40px;
    text-align: left;
  }
  .loading-wrap {
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    grid-template-rows: 150px 150px 150px 150px;
    grid-row-gap: 40px;
    grid-column-gap: 50px;
  }
}
</style>
