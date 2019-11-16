import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//对话框组件样式
import VueAxios from 'vue-axios'
// Vue.use(VuejsDialog)
//让vue使用axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render : h => h(App)
	
  
}).$mount('#app')



