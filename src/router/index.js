import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '', component: () => import('../components/HomeBody.vue')
    },
    {
      path: '/cv', component: () => import('../components/CV.vue')
    },
    {
      path: '/skills', component: () => import('../components/Skills.vue')
    },
    {
      path: '/offers', component: () => import('../components/Offers.vue')
    },
    {
      path: '/projects', component: () => import('../components/Projects.vue')
    },
  ]
});

export default router;
