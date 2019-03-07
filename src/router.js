import Vue from 'vue'
import Router from 'vue-router'
import Chat from './views/Chat.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Matchdetails from './views/Matchdetails.vue'
import About from './views/About.vue'
import Schedule from './views/Schedule.vue'
import Rules from './views/Rules.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
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
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/rules',
      name: 'rules',
      component: Rules
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
      component: Chat,
      meta: {
        requiresAuth: true,
      },
    },
  
  ]
})

/* eslint-disable */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  //  firebase.auth().currentUser ? console.log(currentUser.email) : console.log('nobody logged in');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth); // search if the matched Array has some record with requiresAuth meta

  if (requiresAuth && !currentUser) { // if the route we want to navigate to requires authentication and there is no user 
    next('login');
    alert("Please login to access the chat.") // if there is a currentUser or the route we want to navigate to does not require authentication, navigation will be successfull 
  } else {
    next();
  }
});

export default router;