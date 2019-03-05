import Vue from 'vue'
import Router from 'vue-router'
// import Schedule from './views/Schedule.vue'
import Chat from './views/Chat.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Matchdetails from './views/Matchdetails.vue'
import Schedule from './views/Schedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Login
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },

    {
      path: '/matchdetails/:id',
      name: 'matchdetails',
      component: Matchdetails,
      props: true
    },

    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
  
  ]
})
