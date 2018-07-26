// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
import '../static/styles/less/reset.css'//初始化style


Vue.use(VueAxios, axios, MintUI)


//https://github.com/hilongjw/vue-lazyload
import def_lazy_img from '../static/styles/img/loading.gif' //图片懒加载
Vue.use(VueLazyLoad, {
    loading: def_lazy_img,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: ['scroll']
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
