/*
 * @Descripttion: router 配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-11-08 20:49:30
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cutover",
    name: "Cutover",
    component: () => import("../views/Cutover/Cutover.vue")
  },
  {
    path: "/hover",
    name: "Hover",
    component: () => import("../views/Hover/Hover.vue")
  },
  {
    path: "/loading",
    name: "Loading",
    component: () => import("../views/Loading/Loading.vue")
  },
  {
    path: "/differential",
    name: "Differential",
    component: () => import("../views/Differential/Differential.vue")
  },
  {
    path: "/crystalBall",
    name: "CrystalBall",
    component: () => import("../views/CrystalBall/CrystalBall.vue")
  },
  {
    path: "/circle",
    name: "画圆",
    component: () => import("../views/circle/circle.vue")
  },
  {
    path: "/mouseDistance",
    name: "计算鼠标与中心点的距离",
    component: () => import("../views/MouseDistance/MouseDistance.vue")
  },
  {
    path: "/arrowRotate",
    name: "箭头随着鼠标旋转",
    component: () => import("../views/ArrowRotate/ArrowRotate.vue")
  }
];

const three21Len = 7;
const three21 = new Array(three21Len)
  .fill(undefined, 0, three21Len)
  .map((val, i) => {
    return {
      path: `/3D-${i}`,
      name: `3D${i}`,
      component: () => import(`../views/3D/21/3D-${i}.vue`)
    };
  });
routes = routes.concat(three21);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
