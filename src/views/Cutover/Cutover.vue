<!--
 * @Descripttion: 切换
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-21 16:32:12
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-08 10:52:46
-->

<template>
  <div class="about">
    <top-toggle @select-list-fn="selectListFn"></top-toggle>
    <transition :name="animationName">
      <div class="main page-one" v-if="isMain" key="pageOne"></div>
      <div class="main page-two" v-else key="pageTwo"></div>
    </transition>
  </div>
</template>
<script>
import TopToggle from "./package/TopToggle.vue";

export default {
  components: {
    TopToggle
  },
  data() {
    return {
      isMain: false,
      animationName: ""
    };
  },
  methods: {
    selectListFn(e) {
      this.animationName = e;
      this.isMain = !this.isMain;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/moveLeft.less");
@import url("../../style/moveRight.less");
@import url("../../style/moveTop.less");
@import url("../../style/moveBottom.less");
@import url("../../style/scaleDown.less");
@import url("../../style/scaleUp.less");
@import url("../../style/scaleUpAndLeft.less");
@import url("../../style/scaleDownAndUp.less");
@import url("../../style/scaleLine.less");
@import url("../../style/scaleCircle.less");
@import url("../../style/slide.less");

.about {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: #333;
}
.main {
  width: 100%;
  min-height: calc(100vh - 60px);
  background: #fff;
  overflow: hidden;
}
.page-one {
  background: cornflowerblue;
}
.page-two {
  background: darkseagreen;
}
</style>
