// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
axios.defaults.headers.common['token']="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzYTlmMTJ6MWV5MjAwMDAzYTlmMTJ6MWV5MjAwMDAiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImF2YXRhciI6Imh0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yODE0MTA5MzAzLDIxNDc3MDU1NjAmZm09MjcmZ3A9MC5qcGciLCJuaWNrbmFtZSI6IuWImOWkp-mbqCIsInNleCI6bnVsbCwiYWdlIjpudWxsLCJwaG9uZSI6IjEzNjgzNTk5MzgyIiwiZW1haWwiOm51bGwsIndlY2hhdCI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMTktMDUtMjJUMDk6MDc6NDguMDAwWiIsImNyZWF0ZWRfYXQiOm51bGwsImV4cCI6MTU2NzUxNTc4NTUwMSwiaWF0IjoxNTY3NTE1Nzg0fQ.g7sT8WZpUV36zAWZCPVY1GUuO5FfeJN5jowEUYhV9ec"
// console.log((localStorage.token));
Vue.prototype.axios = axios;
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
