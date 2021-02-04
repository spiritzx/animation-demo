<!--
 * @Descripttion: 箭头跟随鼠标旋转
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-02 22:36:44
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-04 21:52:04
-->
<template>
  <div class="wrap">
    <h1>计算鼠标与中心点的距离</h1>
    <div id="circleWrap" class="circle-wrap"></div>
    <p>{{ distance }}</p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { zrInitFn, drawArrow } from "../../utils/zrenderPlug";
export default {
  setup() {
    const zr = ref(null);
    const distance = ref(0);
    const originX = 250;
    const originY = 250;
    const drawArrowFn = () => {
      const arrow = drawArrow(originX, originY);
      zr.value.add(arrow);
      return arrow;
    };
    // 获得弧度
    const getRad = (x, y) => {
      const dx = x - originX;
      const dy = y - originY;
      const deg = Math.atan2(dx, dy);
      return deg;
    };
    onMounted(() => {
      zr.value = zrInitFn("circleWrap");
      const arrow = drawArrowFn();
      zr.value.on("mousemove", e => {
        const event = e.event;
        const mouseX = event.zrX;
        const mouseY = event.zrY;
        const rad = getRad(mouseX, mouseY);
        arrow.attr("rotation", rad + 3);
      });
    });
    return {
      distance
    };
  }
};
</script>

<style lang="less" scoped>
.circle-wrap {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
