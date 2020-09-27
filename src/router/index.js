/*
 * @Descripttion: router 配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 16:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-27 15:28:17
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
