import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "input",
      component: () => import("./views/Input.vue")
    },
    {
      path: "/confirmation",
      name: "confirmation",
      component: () => import("./views/Confirmation.vue")
    },
    {
      path: "/completion",
      name: "completion",
      component: () => import("./views/Completion.vue")
    }
  ]
});
