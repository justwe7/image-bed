// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'my_common/css/reset.css';//引入css reset
import 'my_common/sass/mixin.scss';//引入css reset

import axios from 'axios'

// Vue.prototype.$axios = axios;
axios.interceptors.request.use(config => {
  //在发送请求之前做某事，比如说 设置loading动画显示
  console.log('请求之前');
  return config
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  //对响应数据做些事，比如说把loading动画关掉
  return response
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
