import Vue from 'vue'
import App from './App.vue'
import Like from './components/LikeNumber.vue'

Vue.config.productionTip = false
// componentのglobal登録
Vue.component('LikeNumber', Like)

new Vue({
  render: h => h(App),
}).$mount('#app')
