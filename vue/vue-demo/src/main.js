import Vue from "vue"
import App from "./App.vue"
import Router from "./router"
import Like from "./components/LikeNumber.vue"

Vue.config.productionTip = false
// componentのglobal登録 (directive, component)
Vue.component('LikeNumber', Like)

new Vue({
    router: Router,
    render: h => h(App),
}).$mount('#app')
