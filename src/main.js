import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
import toast from "components/common/toast"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 安装插件（自己写的）
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/loading.gif')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
