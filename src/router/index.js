import Vue from "vue";
import Router from "vue-router";
//import { publicPath } from '../../vue.config.js'

//import Home from '../components/Home.vue'

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
      path: '/projects', component: () => import('../components/Projects.vue')
    },
    { path: '*', component:  () => import('../components/NotFoundComponent.vue') }
  ]
});

export default router;
