import Vue from 'vue'
import VueRouter from 'vue-router'

import Portada from '../views/Portada.vue'
import SobreMi from '../views/SobreMi.vue'
import Contacto from '../views/Contacto.vue'
import UltimoPost from '@/views/UltimoPost.vue'
import RutaInexistente from '../views/RutaInexistente.vue'

import AdminAdvance from '../views/users/AdminAdvance.vue'
import AdminSimple from '../views/users/AdminSimple.vue'


Vue.use(VueRouter)       

const routes = [

  {
    path: '/',
    name: 'Portada',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portada.vue'),
  },
    {
      path: '/home',
      name: 'Portada',
      component: Portada,
      redirect: '/'
    },
    {
      path: '/inicio',
      name: 'Portada',
      component: Portada,
      redirect: '/'
    },
    {
      path: '/portada',
      name: 'Portada',
      component: Portada,
      redirect: '/'
    },

  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi,
    alias: ['/acerca']
  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
    alias: ['/contactarme']
  },

  {
    path: '/ultimopost/:id',
    name: 'UltimoPost',
    component: UltimoPost
  },

  {
    path: '/administrador/simple',
    name: 'AdminSimple',
    component: AdminSimple
  },

  {
    path: '/administrador/avanzado',
    name: 'AdminAdvance',
    component: AdminAdvance
  },
  
    // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/lazyloading',
  //   name: 'LazyLoading',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/LazyLoading.vue')
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
