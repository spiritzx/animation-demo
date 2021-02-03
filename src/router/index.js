/*
 * @Descripttion: router 配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-02 22:37:53
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
