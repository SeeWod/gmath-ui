# Gmath

**🏷️是什么？**0

> gmath是一个几何运算库
>
> 从白板项目分离出来，用于一些2D几何运算



## 教程

~~~~~bash
npm install gmath

import {...} from 'gmath'
~~~~~
## 参考文档

#### 点与直线

| 函数名(参数)                                 | describe     | retrun |
| -------------------------------------------- | ------------ | ------ |
| getTowPointDistance(x1, y1, x2, y2)          | 两点距离     | number |
| getPointToLineDistance(x, y, x1, y1, x2, y2) | 点与直线距离 | number |
|                                              |              |        |

#### 图形关系（包含）：

| 函数名(参数)                                 | describe   | return  |
| -------------------------------------------- | ---------- | ------- |
| isPointAtSegment((x, y, x1, y1, x2, y2, dis) | 点在线段上 | boolean |
| isPointInRectangle = (x, y, rx, ry, rw, rh)  | 点在矩形内 | boolean |



#### 角度相关：

| 函数名(参数)                                              | describe   |        |
| --------------------------------------------------------- | ---------- | ------ |
| radToDeg(rad)                                             | 弧度转角度 | number |
| degToRad(deg)                                             | 角度转弧度 | number |
| getAngleBetweenTwoVectors(x1, y1, x2, y2, x3, y3, x4, y4) | 两向量夹角 | number |


~~~~~
