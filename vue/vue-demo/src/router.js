
// import components
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"
import Users from "./views/Users.vue"
import Umamusume from "./views/Umamusume.vue"
import Board from "./views/Board.vue"

Vue.use(Router);

export default
new Router({
    mode: "history", // defaultはhash
    routes: [
        {path: '/', component: Home},
        {path: '/users/:chara', component: Users},
        {path: '/uma', component: Umamusume},
        {path: '/board', component: Board},
    ]
});

