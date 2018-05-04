// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//使用 element 的方式，必须引入 index.css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(vuex);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
