import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home',
    component: Home
  },
  { path: '/mainDash', name: 'mainDash',
    component: () => import('../views/mainDash.vue')
  },
  { path: '/mainMessages', name: 'mainMessages',
    component: () => import('../views/mainMessages.vue')
  },
  { path: '/mainInvite', name: 'mainInvite',
    component: () => import('../views/mainInvite.vue')
  },
  { path: '/mainProfile', name: 'mainProfile',
    component: () => import('../views/mainProfile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
