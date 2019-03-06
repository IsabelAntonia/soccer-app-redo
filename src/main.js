import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app;


firebase.auth().onAuthStateChanged(function (user) {
    if (!app) {

        app = new Vue({
            store,
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})




// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
