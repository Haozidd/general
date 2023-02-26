import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/mock/mockServe'
import store from "@/store";
import * as api from '@/api'
import * as echarts from "echarts";
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$api =api

  },
  store,
  router
}).$mount('#app')
