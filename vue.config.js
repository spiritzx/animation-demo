/*
 * @Descripttion: webpack 配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-04-15 20:40:13
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-04-15 20:40:59
 */
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        // OrbitControls.js库使用
        {
          test: require.resolve("three/examples/js/controls/OrbitControls"),
          use: "imports-loader?THREE=three"
        },
        {
          test: require.resolve("three/examples/js/controls/OrbitControls"),
          use: "exports-loader?THREE.OrbitControls"
        },
        // CSS2DRenderer.js库使用
        {
          test: require.resolve("three/examples/js/renderers/CSS2DRenderer.js"),
          use: "imports-loader?THREE=three"
        },
        {
          test: require.resolve("three/examples/js/renderers/CSS2DRenderer.js"),
          use: "exports-loader?THREE.CSS2DRenderer"
        },
        // OBJLoader.js库使用
        {
          test: require.resolve("three/examples/js/loaders/OBJLoader.js"),
          use: "imports-loader?THREE=three"
        },
        {
          test: require.resolve("three/examples/js/loaders/OBJLoader.js"),
          use: "exports-loader?THREE.OBJLoader"
        }
      ]
    }
  }
};
