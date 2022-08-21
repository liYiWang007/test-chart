import Vue from 'vue'
import router from "@/routers";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/element-variables.scss'
import App from './App.vue'
import PyzCharts from "pyz-charts/index";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(PyzCharts)
Vue.prototype.$http = process.env.VUE_APP_API_URL
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
