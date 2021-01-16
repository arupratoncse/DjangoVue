import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true},
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: { requiresVisitor: true},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      meta: { requiresAuth: true},
      component: () => import('./views/Logout.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { requiresVisitor: true},
      component: () => import('./views/Register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  }
  else {
    next()
  }
})

export default router
