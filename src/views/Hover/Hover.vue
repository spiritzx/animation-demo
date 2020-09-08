<!--
 * @Descripttion: hover 特效
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-09-08 14:12:29
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 17:26:55
-->
<template>
  <div class="hover">
    <router-link class="title" to="/" type="replace">hover特效</router-link>
    <div class="hover-item">
      <h3 class="hover-title">2D Transforms</h3>
      <div class="hover-wrap">
        <hover-grow></hover-grow>
        <hover-shink></hover-shink>
        <hover-pulse></hover-pulse>
        <hover-shake></hover-shake>
        <hover-shadow></hover-shadow>
        <HoverWobbleH></HoverWobbleH>
        <HoverWobbleV></HoverWobbleV>
      </div>
    </div>
  </div>
</template>

<script>
import HoverGrow from "@/components/hover/HoverGrow/HoverGrow";
import HoverShink from "@/components/hover/HoverShink/HoverShink";
import HoverPulse from "@/components/hover/HoverPulse/HoverPulse";
import HoverWobbleH from "@/components/hover/HoverWobbleH/HoverWobbleH";
import HoverWobbleV from "@/components/hover/HoverWobbleV/HoverWobbleV";
import HoverShake from "@/components/hover/HoverShake/HoverShake";
import HoverShadow from "@/components/hover/HoverShadow/HoverShadow";

export default {
  components: {
    HoverGrow,
    HoverShink,
    HoverPulse,
    HoverWobbleH,
    HoverWobbleV,
    HoverShake,
    HoverShadow
  }
};
</script>

<style lang="less">
@import url("../../style/common.less");
.hover-item {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  .hover-title {
    font-size: 24px;
    margin-bottom: 40px;
    text-align: left;
  }
  .hover-wrap {
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    grid-row-gap: 40px;
    grid-column-gap: 50px;
  }
}
</style>
