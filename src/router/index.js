import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import Layout from 'views/Layout'

import CanvasWave from 'views/canvas/canvas-wave'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '菜单列表',
    component: Home,
    root: true
  }, {
    path: '',
    name: 'canvas实现波浪效果',
    component: Layout,
    children: [{ path: '/canvas/wave', component: CanvasWave, name: 'canvas实现波浪效果' }],
    meta: {
      cover: 'http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg',
      desc: '使用 canvas 实现波浪效果的原理与 SVG 一样，都是利用路径绘制出三次贝塞尔曲线并赋予动画效果'
    }
  }, {
    path: '',
    name: 'canvas实现烟花',
    component: Layout,
    children: [{ path: '/canvas/firework', component: require('views/canvas/canvas-firework'), name: 'canvas实现烟花' }],
    meta: {
      desc: '使用 canvas 实现烟花效果,鼠标点击可释放烟花'
    }
  }, {
    path: '',
    name: 'Snap-svg',
    component: Layout,
    children: [{ path: '/svg/animate', component: require('views/svg/animate'), name: "Snap-svg" }],
    meta: {
      desc: 'Snap-svg实现简单的动画效果'
    }
  }]
})
