/*
 * @Descripttion: zrender 加强插件
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-02 22:41:44
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-02 23:14:14
 */
import * as zrender from "zrender";

export function zrInitFn(id) {
  const dom = document.getElementById(id);
  const zr = zrender.init(dom);
  return zr;
}

export function drawPoint(zr, x, y) {
  var point = new zrender.Circle({
    style: {
      fill: "#000"
    },
    shape: {
      cx: x,
      cy: y,
      r: 1
    }
  });
  zr.add(point);
}
