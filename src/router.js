import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/View1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/View1',
      name: 'View1',
      component: Home
    },
    {
      path: '/View2',
      name: 'View2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/View2.vue')
    }
    
  ]
})
