<!--
 * @Descripttion: 顶点数据创建形体
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-04-12 21:16:50
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-11-07 17:57:25
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
  created() {
    console.log(three);
  },
  mounted() {
    this.initFn();
    // (function animloop() {
    //   window.requestAnimationFrame(animloop);
    // })();
  },
  methods: {
    initFn() {
      console.log(three);
      const box1 = new three.BufferGeometry(); //创建一个Buffer类型几何体对象
      //类型数组创建顶点数据
      const vertices = new Float32Array([
        0,
        0,
        0, //顶点1坐标
        50,
        0,
        0, //顶点2坐标
        0,
        100,
        0, //顶点3坐标
        0,
        0,
        0, //顶点4坐标
        0,
        0,
        100, //顶点5坐标
        50,
        0,
        0 //顶点6坐标
      ]);
      const attribue = new three.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
      // 设置几何体attributes属性的位置属性
      box1.attributes.position = attribue;
      // 三角面(网格)渲染模式
      // var material = new three.MeshBasicMaterial({
      //   color: 0x123456, //三角面颜色
      //   side: three.DoubleSide //两面可见
      //   // side: 3
      // }); //材质对象
      //材质对象

      var colors = new Float32Array([
        1,
        0,
        0, //顶点1颜色
        0,
        1,
        0, //顶点2颜色
        0,
        0,
        1, //顶点3颜色

        1,
        1,
        0, //顶点4颜色
        0,
        1,
        1, //顶点5颜色
        1,
        0,
        1 //顶点6颜色
      ]);
      // 设置几何体attributes属性的颜色color属性
      box1.attributes.color = new three.BufferAttribute(colors, 3);
      var material = new three.PointsMaterial({
        // 使用顶点颜色数据渲染模型，不需要再定义color属性
        // color: 0xff0000,
        vertexColors: three.VertexColors, //以顶点颜色为准
        size: 10.0 //点对象像素尺寸
      });
      var mesh1 = new three.Mesh(box1, material); //网格模型对象Mesh

      const scene = new three.Scene();
      scene.add(mesh1);
      // 添加坐标系
      const axisHelper = new three.AxisHelper(250);
      scene.add(axisHelper);
      /**
       * 光源设置
       */
      //点光源
      var point = new three.PointLight(0xffffff);
      point.position.set(200, 200, 200); //点光源位置
      scene.add(point); //点光源添加到场景中
      //点光源2
      var point1 = new three.PointLight(0xffffff);
      point1.position.set(-200, -200, -200); //点光源位置
      scene.add(point1); //点光源添加到场景中
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
    }
  }
};
</script>

<style></style>
