// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'assets/styles/common.scss'

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(transition => {
  if (transition.name) {
    document.title = transition.name;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
