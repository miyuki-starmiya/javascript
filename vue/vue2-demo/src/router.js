import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Stripe from "./pages/Stripe.vue"

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about/:username", component: About },
    { path: "/stripe", component: Stripe },
  ]
})

export { router };
