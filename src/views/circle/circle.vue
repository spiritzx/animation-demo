<!--
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-02 22:36:44
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-03 21:23:42
-->
<template>
  <div class="wrap">
    <h1>画圆</h1>
    <div id="circleWrap" class="circle-wrap"></div>
    <button @click="repaintFn">重画</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { zrInitFn, drawPoint } from "../../utils/zrenderPlug";
export default {
  setup() {
    const zr = ref(null);
    const timeId = ref(null);
    const originX = 250;
    const originY = 250;
    const totalDeg = 360;
    const r = 100;
    let deg = 0;
    const drawPointFn = deg => {
      let x = originX + r * Math.sin(deg);
      let y = originY + r * Math.cos(deg);
      drawPoint(zr.value, x, y);
    };
    const drawCircleFn = () => {
      cancelAnimationFrame(timeId.value);
      timeId.value = requestAnimationFrame(function fn() {
        if (deg < totalDeg) {
          const rad = (Math.PI / 180) * deg;
          deg += 0.5;
          drawPointFn(rad);
          timeId.value = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timeId.value);
        }
      });
    };
    const repaintFn = () => {
      zr.value.clear();
      cancelAnimationFrame(timeId.value);
      deg = 0;
      drawCircleFn();
    };
    onMounted(() => {
      zr.value = zrInitFn("circleWrap");
      drawCircleFn();
    });
    return {
      repaintFn
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
