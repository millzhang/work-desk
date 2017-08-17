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
    component: CanvasWave
  }, {
    path: '/canvas/firework',
    name: 'canvas实现烟花',
    component: require('views/canvas/canvas-firework')
  }]
})
