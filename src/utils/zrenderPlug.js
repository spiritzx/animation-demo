/*
 * @Descripttion: zrender 加强插件
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-02 22:41:44
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-04 21:23:57
 */
import * as zrender from "zrender";

export function zrInitFn(id) {
  const dom = document.getElementById(id);
  const zr = zrender.init(dom);
  return zr;
}

export function drawPoint(zr, x, y, r = 1) {
  var point = new zrender.Circle({
    style: {
      fill: "#000"
    },
    shape: {
      cx: x,
      cy: y,
      r: r
    }
  });
  zr.add(point);
  return point;
}

export function drawArrow(originX, originY) {
  var group = new zrender.Group();
  // 旋转基点
  group.origin = [originX, originY];
  var line = new zrender.Line({
    shape: {
      x1: originX - 0.5,
      y1: originY + 50,
      x2: originX - 0.5,
      y2: originY - 50
    },
    zlevel: 1
  });
  var arrow = new zrender.Isogon({
    shape: {
      x: originX,
      y: originY - 50,
      r: 9,
      n: 3
    },
    style: {
      fill: "#333"
    },
    zlevel: 2
  });
  group.add(line);
  group.add(arrow);
  return group;
}
