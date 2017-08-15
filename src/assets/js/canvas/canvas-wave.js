import Util from '../Util.js';

//prepare some params
let ctx = null;
const radius = (Math.PI / 180) * 180;
let startTime = Date.now();
let time = 2000;
let clockwise = 1;
let cp1x, cp1y, cp2x, cp2y;

export default class CanvasWave {
  constructor(id) {
    if (Util.isEmpty(id)) {
      console.error('DOM ID IS EMPTY');
      return;
    }
    let canvas = document.getElementById(id);
    ctx = canvas.getContext('2d');
    this.init();
  }

  init() {
    requestAnimationFrame(function drawWave() {
      let t = Math.min(1.0, (Date.now() - startTime) / time);

      if (clockwise) {
        cp1x = 90 + (55 * t);
        cp1y = 28 + (72 * t);
        cp2x = 92 - (51 * t);
        cp2y = 179 - (79 * t);
      } else {
        cp1x = 145 - (55 * t);
        cp1y = 100 - (72 * t);
        cp2x = 41 + (51 * t);
        cp2y = 100 + (79 * t);
      }

      ctx.clearRect(0, 0, 200, 200);
      ctx.beginPath();
      ctx.moveTo(0, 100);
      // 绘制三次贝塞尔曲线
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, 200, 100);
      // 绘制圆弧
      ctx.arc(100, 100, 100, 0, radius, 0);
      ctx.fillStyle = "rgba(154, 205, 50, .8)";
      ctx.fill();
      ctx.save();

      if (t == 1) {
        startTime = Date.now();
        clockwise = !clockwise;
      }
      requestAnimationFrame(drawWave);
    })
  }

}
