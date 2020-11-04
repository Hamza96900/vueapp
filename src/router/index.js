import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]
const router = new VueRouter({
  mode: 'history' , routes
})

export default router
