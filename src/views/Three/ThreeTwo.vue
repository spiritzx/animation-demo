<!--
 * @Descripttion: threeJs-two
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-04-12 21:16:50
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-04-13 21:54:19
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
    // (function animloop() {
    //   window.requestAnimationFrame(animloop);
    // })();
  },
  methods: {
    initFn() {
      const scene = new three.Scene();
      const ball = new three.BoxGeometry(100, 100, 100);
      // const ball = new three.SphereGeometry(60, 120, 40);
      const material = new three.MeshLambertMaterial({
        color: 0x008800
      });
      const mesh = new three.Mesh(ball, material);
      scene.add(mesh);
      this.mesh = mesh;
      /**
       * 光源设置
       */
      //点光源
      var point = new three.PointLight(0xffffff);
      point.position.set(200, 200, 200); //点光源位置
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
      let T0 = new Date();
      (function animloop() {
        let T1 = new Date(); //本次时间
        let t = T1 - T0; //时间差
        T0 = T1; //把本次时间赋值给上次时间
        // console.log(t);
        render.render(scene, camera);
        mesh.rotateX(0.002 * t);
        mesh.rotateY(0.001 * t);
        window.requestAnimationFrame(animloop);
      })();
    }
  }
};
</script>

<style></style>
