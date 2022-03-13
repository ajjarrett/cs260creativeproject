import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BiographyView from '../views/BiographyView.vue'
import ContactView from '../views/ContactView.vue'
import ModulesView from '../views/ModulesView.vue'

import Module1 from '../views/Module1.vue'
import Module2 from '../views/Module2.vue'
import Module3 from '../views/Module3.vue'
import Module4 from '../views/Module4.vue'
import Module5 from '../views/Module5.vue'
import Module6 from '../views/Module6.vue'
import Module7 from '../views/Module7.vue'
import Module8 from '../views/Module8.vue'
import Module9 from '../views/Module9.vue'
import Module10 from '../views/Module10.vue'
import Module11 from '../views/Module11.vue'
import Module12 from '../views/Module12.vue'
import Module13 from '../views/Module13.vue'
import Module14 from '../views/Module14.vue'
import Module15 from '../views/Module15.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/biography',
    name: 'biography',
    component: BiographyView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModulesView
  },
  {
    path: '/module1',
    name: 'module1',
    component: Module1
  },
  {
    path: '/module2',
    name: 'module2',
    component: Module2
  },
  {
    path: '/module3',
    name: 'module3',
    component: Module3
  },
  {
    path: '/module4',
    name: 'module4',
    component: Module4
  },
  {
    path: '/module5',
    name: 'module5',
    component: Module5
  },
  {
    path: '/module6',
    name: 'module6',
    component: Module6
  },

  {
    path: '/module7',
    name: 'module7',
    component: Module7
  },

  {
    path: '/module8',
    name: 'module8',
    component: Module8
  },

  {
    path: '/module9',
    name: 'module9',
    component: Module9
  },

  {
    path: '/module10',
    name: 'module10',
    component: Module10
  },

  {
    path: '/module11',
    name: 'module11',
    component: Module11
  },

  {
    path: '/module12',
    name: 'module12',
    component: Module12
  },

  {
    path: '/module13',
    name: 'module13',
    component: Module13
  },

  {
    path: '/module14',
    name: 'module14',
    component: Module14
  },
  {
    path: '/module15',
    name: 'module15',
    component: Module15
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
