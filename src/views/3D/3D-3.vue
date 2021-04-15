<!--
 * @Descripttion: threeJs-two: 鼠标控制
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-04-12 21:16:50
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-04-15 22:18:30
-->
<template>
  <div class="three-wrap" id="3dWrap"></div>
</template>

<script>
import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  data() {
    return {
      W: 0,
      H: 0,
      camera: null,
      render: null
    };
  },
  mounted() {
    this.initFn();
    this.renderFn();
    this.mouseMoveFn();
  },
  methods: {
    initFn() {
      this.scene = new three.Scene();
      const ball = new three.BoxGeometry(100, 100, 100);
      // const ball = new three.SphereGeometry(60, 120, 40);
      const material = new three.MeshLambertMaterial({
        color: 0x008800
      });
      const mesh = new three.Mesh(ball, material);
      this.scene.add(mesh);
      /**
       * 光源设置
       */
      //点光源
      var point = new three.PointLight(0xffffff);
      point.position.set(100, 400, 300); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      //环境光
      var ambient = new three.AmbientLight(0x004444);
      this.scene.add(ambient);

      // 相机
      const W = window.innerWidth;
      const H = window.innerHeight;
      var k = W / H; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      var camera = new three.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(300, 200, 200); //设置相机位置
      camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)

      const box = document.getElementById("3dWrap");
      const render = new three.WebGLRenderer();
      render.setClearColor(0xb9d3ff, 1); //设置背景颜色
      render.setSize(W, H);
      box.appendChild(render.domElement);
      // let T0 = new Date();
      // (function animloop() {
      //   let T1 = new Date(); //本次时间
      //   let t = T1 - T0; //时间差
      //   T0 = T1; //把本次时间赋值给上次时间
      //   // console.log(t);
      //   render.render(scene, camera);
      //   mesh.rotateX(0.002 * t);
      //   mesh.rotateY(0.001 * t);
      //   window.requestAnimationFrame(animloop);
      // })();
      this.camera = camera;
      this.render = render;
      // this.renderFn();
    },
    renderFn() {
      this.render.render(this.scene, this.camera);
    },
    mouseMoveFn() {
      var controls = new OrbitControls(this.camera, this.render.domElement);
      controls.addEventListener("change", this.renderFn);
    }
  }
};
</script>

<style></style>
