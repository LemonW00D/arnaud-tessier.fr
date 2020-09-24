import Vue from "vue";
import VueRouter from "vue-router";

/* import des components */
import Home from "@/views/Home";
import About from "@/views/About";
import Skills from "@/views/Skills";
import Works from "@/views/Works";
import Prices from "@/views/Prices";
import Contact from "@/views/Contact";





Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "", redirect: "/home" },
    { path: "/home", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/skills", name: "Skills", component: Skills },
    { path: "/works", name: "Works", component: Works },
    { path: "/prices", name: "Prices", component: Prices },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "**", redirect: "/home" },
    { path: "*", redirect: "/home" },
    { path: "", redirect: "/home" },
  ]
});

export default router;