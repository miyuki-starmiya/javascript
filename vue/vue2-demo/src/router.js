import VueRouter from "vue-router";

import Home from "./pages/Home";
import About from "./pages/About";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about/:username", component: About },
  ]
})

export { router };
