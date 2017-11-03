import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'

import CanvasWave from 'views/canvas/canvas-wave'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '菜单列表',
    component: Home
  }, {
    path: '/canvas/wave',
    name: 'canvas实现波浪效果',
    component: CanvasWave,
    meta: {
      cover: 'http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg',
      desc: '使用 canvas 实现波浪效果的原理与 SVG 一样，都是利用路径绘制出三次贝塞尔曲线并赋予动画效果'
    }
  }, {
    path: '/canvas/firework',
    name: 'canvas实现烟花',
    component: require('views/canvas/canvas-firework'),
    meta: {
      desc: '使用 canvas 实现烟花效果,鼠标点击可释放烟花'
    }
  }]
})
