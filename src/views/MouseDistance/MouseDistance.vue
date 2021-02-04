<!--
 * @Descripttion: 鼠标与中心点距离
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-02 22:36:44
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-04 20:45:21
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
import { zrInitFn, drawPoint } from "../../utils/zrenderPlug";
export default {
  setup() {
    const zr = ref(null);
    const distance = ref(0);
    const originX = 250;
    const originY = 250;
    const drawPointFn = () => {
      return drawPoint(zr.value, originX, originY, 5);
    };
    const getDistance = (x, y) => {
      const dx = Math.abs(x - originX);
      const dy = Math.abs(y - originY);
      distance.value = Math.sqrt(dx * dx + dy * dy);
    };
    onMounted(() => {
      zr.value = zrInitFn("circleWrap");
      drawPointFn();
      const point = drawPointFn();
      zr.value.on("mousemove", e => {
        const event = e.event;
        const mouseX = event.zrX;
        const mouseY = event.zrY;
        getDistance(mouseX, mouseY);
        point.attr("shape", {
          cx: mouseX,
          cy: mouseY
        });
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
