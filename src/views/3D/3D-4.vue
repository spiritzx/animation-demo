<!--
 * @Descripttion: threeJs-4: 多个集合体
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-04-12 21:16:50
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-11-06 16:51:23
-->
<template>
  <div class="three-wrap" id="3dWrap"></div>
</template>

<script>
import * as three from "three";
export default {
  data() {
    return {
      mesh: null,
      W: 0,
      H: 0,
      scene: null,
      camera: null
    };
  },
  mounted() {
    this.initFn();
  },
  methods: {
    initFn() {
      const scene = new three.Scene();
      // 长方体（长，宽，高）
      const sharp1 = new three.BoxGeometry(100, 100, 100);
      // 设置颜色
      const material = new three.MeshLambertMaterial({
        color: 0x126512
      });
      const mesh1 = new three.Mesh(sharp1, material);

      // 球体（半径，经纬度细分数）
      const sharp2 = new three.SphereGeometry(40, 40, 40);
      // 设置颜色
      const materia2 = new three.MeshLambertMaterial({
        color: 0x126512
      });
      const mesh2 = new three.Mesh(sharp2, materia2);
      mesh2.translateX(120);

      // 圆柱  参数：圆柱面顶部、底部直径50,50  高度100  圆周分段数
      const sharp3 = new three.CylinderGeometry(50, 50, 100, 25);
      // 设置颜色
      const materia3 = new three.MeshLambertMaterial({
        color: 0x126512
      });
      const mesh3 = new three.Mesh(sharp3, materia3);
      mesh3.translateX(-120);

      // 正八面体
      const sharp4 = new three.OctahedronGeometry(50);
      // 设置颜色
      const materia4 = new three.MeshLambertMaterial({
        color: 0x126512
      });
      const mesh4 = new three.Mesh(sharp4, materia4);
      mesh4.translateZ(120);

      // 正12面体
      const sharp5 = new three.DodecahedronGeometry(50);
      // 设置颜色
      const materia5 = new three.MeshLambertMaterial({
        color: 0x126512
      });
      const mesh5 = new three.Mesh(sharp5, materia5);
      mesh5.translateZ(-120);

      // 正20面体
      const sharp6 = new three.IcosahedronGeometry(50);
      // 设置颜色
      const materia6 = new three.MeshLambertMaterial({
        color: 0x126512
      });
      const mesh6 = new three.Mesh(sharp6, materia6);
      mesh6.translateY(120);

      const axisHelper = new three.AxisHelper(250);
      scene.add(axisHelper);

      scene.add(mesh1);
      scene.add(mesh2);
      scene.add(mesh3);
      scene.add(mesh4);
      scene.add(mesh5);
      scene.add(mesh6);

      /**
       * 光源设置
       */
      //点光源
      var point = new three.PointLight(0xffffff);
      point.position.set(0, 200, 200); //点光源位置
      scene.add(point); //点光源添加到场景中
      //环境光
      var ambient = new three.AmbientLight(0x004444);
      scene.add(ambient);

      // 相机
      const W = window.innerWidth;
      const H = window.innerHeight;
      var k = W / H; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      var camera = new three.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(300, 200, 200); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

      const box = document.getElementById("3dWrap");
      const render = new three.WebGLRenderer();
      render.setClearColor(0xb9d3ff, 1); //设置背景颜色
      render.setSize(W, H);
      box.appendChild(render.domElement);
      render.render(scene, camera);
      // let T0 = new Date();
      // (function animloop() {
      //   let T1 = new Date(); //本次时间
      //   let t = T1 - T0; //时间差
      //   T0 = T1; //把本次时间赋值给上次时间
      //   // console.log(t);
      //   mesh.rotateX(0.002 * t);
      //   mesh.rotateY(0.001 * t);
      //   window.requestAnimationFrame(animloop);
      // })();
    }
  }
};
</script>

<style></style>
