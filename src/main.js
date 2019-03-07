import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import store from './store'

Vue.config.productionTip = false

 
var config = {
    apiKey: "AIzaSyB943zmrzDkY_c--WmdeRMDsGBWa6Mz-uI",
    authDomain: "soccer-app-mobile.firebaseapp.com",
    databaseURL: "https://soccer-app-mobile.firebaseio.com",
    projectId: "soccer-app-mobile",
    storageBucket: "soccer-app-mobile.appspot.com",
    messagingSenderId: "10660463827"
  };
  firebase.initializeApp(config);

let app;


firebase.auth().onAuthStateChanged(function() {
    if (!app) {

        app = new Vue({
            store,
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})


