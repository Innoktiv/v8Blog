import Vue from 'vue'
import VueRouter from 'vue-router'

import Portada from '../views/Portada.vue'
import SobreMi from '../views/SobreMi.vue'
import Contacto from '../views/Contacto.vue'
import UltimoPost from '@/views/UltimoPost.vue'
import RutaInexistente from '../views/RutaInexistente.vue'

Vue.use(VueRouter)       

const routes = [

  {
    path: '/',
    name: 'Portada',
    component: Portada
  },

  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi
  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },

  {
    path: '/ultimopost/:id',
    name: 'UltimoPost',
    component: UltimoPost
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  {
    path: '/*',
    component: RutaInexistente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
