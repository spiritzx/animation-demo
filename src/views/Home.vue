<!--
 * @Descripttion: 导航
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-11-08 21:59:36
-->
<template>
  <div class="home">
    <h1 class="title">项目导航</h1>
    <ul class="nav-wrap">
      <li v-for="(item, i) in routes" :key="i">
        <router-link :to="item.path">{{ i }}.{{ item.name }}</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link to="/cutover">1. 切换动画</router-link>
      </li> -->
      <li class="nav-item">
        <router-link to="/hover">2. hover特效</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/loading">3. loading特效</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/differential">4. 差速动画</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/crystalBall">5. 水晶球</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/circle">6. 画圆</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/mouseDistance">7. 鼠标与中心的距离</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/arrowRotate">8. 箭头随着鼠标旋转</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/3D-1">9. threeJS-1</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/3D-2">10. threeJS-2</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/3D-3">11. threeJS-3</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/3D-4">12. threeJS-4</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/3D-5">13. threeJS-5</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/3D-6">14. threeJS-6</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  setup() {
    const routes = reactive([
      {
        name: "切换动画",
        path: "/cutover"
      }
    ]);
    return {
      routes
    };
  }
};
</script>

<style scoped lang="less">
.nav-wrap {
  list-style: none;
  text-align: left;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
.nav-item {
  width: 50%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: left;
}
</style>
