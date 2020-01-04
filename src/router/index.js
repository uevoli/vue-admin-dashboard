import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignInFlow/SignIn";
import Recover from "../views/SignInFlow/Recover";
import Request from "../views/SignInFlow/Request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  },
  {
    path: "/request",
    name: "request",
    component: Request
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
