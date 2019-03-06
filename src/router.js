import Vue from 'vue'
import Router from 'vue-router'
// import Schedule from './views/Schedule.vue'
import Chat from './views/Chat.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Matchdetails from './views/Matchdetails.vue'
import Schedule from './views/Schedule.vue'

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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  //  firebase.auth().currentUser ? console.log(currentUser.email) : console.log('nobody logged in');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
    alert("Please login to access the chat.")
  } else {
    next();
  }
});

export default router;