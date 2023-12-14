//几何运算库  目前都是2D图形
//两点之间的距离
export const getTowPointDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }
  
//点到直线的距离
export const getPointToLineDistance = (x, y, x1, y1, x2, y2) => {
  // 直线垂直于x轴
  if (x1 === x2) {
    return Math.abs(x - x1)
  } else {
    let B = 1
    let A, C
    A = (y1 - y2) / (x2 - x1)
    C = 0 - B * y1 - A * x1
    return Math.abs((A * x + B * y + C) / Math.sqrt(A * A + B * B))
  }
}
  
//点在线段上
// checkIsAtSegmen
export const isPointAtSegment = (x, y, x1, y1, x2, y2, dis = 10) => {
  if (getPointToLineDistance(x, y, x1, y1, x2, y2) > dis) {
    return false
  }
  let dis1 = getTowPointDistance(x, y, x1, y1)
  let dis2 = getTowPointDistance(x, y, x2, y2)
  let dis3 = getTowPointDistance(x1, y1, x2, y2)
  let max = Math.sqrt(dis * dis + dis3 * dis3)
  if (dis1 <= max && dis2 <= max) {
    return true
  }
  return false
}

//点在矩形内
// checkPointIsInRectangle
export const isPointInRectangle = (x, y, rx, ry, rw, rh) => {
  return x >= rx && x <= rx + rw && y >= ry && y <= ry + rh
}

//--------------------------角度相关
// 弧度转角度
export const radToDeg = rad => {
    return rad * (180 / Math.PI)
}
// 角度转弧度
export const degToRad = deg => {
    return deg * (Math.PI / 180)
}

//向量夹角
// getTowPointRotate
export const getAngleBetweenTwoVectors = (x1, y1, x2, y2, x3, y3, x4, y4) => {
    return radToDeg(Math.atan2(y2 - y1, x2 - x1) - Math.atan2(y4 - y3, x4 - x3))
}
//绕指定中心点旋转后 点的坐标，顺时针还是逆时针rotate传正负即可---角度法
export const getPosdPointRotate = (x, y, cx, cy, rotate) => {
    let deg = radToDeg(Math.atan2(y - cy, x - cx))
    let del = deg + rotate
    let dis = getTowPointDistance(x, y, cx, cy)
    return {
        x: Math.cos(degToRad(del)) * dis + cx,
        y: Math.sin(degToRad(del)) * dis + cy
    }
}
// transformPointReverseRotate