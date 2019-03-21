<template>
  <v-app>
   <v-toolbar dark class="blue lighten-5">
      <v-toolbar-side-icon color='orange' @click="sideNav = true" class="hidden-sm-and-up"></v-toolbar-side-icon>

      <v-toolbar-title style='color: orange'>Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>



        <v-btn v-if="currentUser === false" class="hidden-xs-only" flat color="orange" to="/login">Login</v-btn>
        <v-btn v-if="currentUser === false" class="hidden-xs-only" flat color="orange" to="/signup">Signup</v-btn>
        <v-btn class="hidden-xs-only" flat color="orange" to="/schedule">Schedule</v-btn>
        <v-btn class="hidden-xs-only" flat color="orange" to="/chat">Chat</v-btn>
        <v-btn class="hidden-xs-only" flat color="orange" to="/about">About</v-btn>
        <v-btn class="hidden-xs-only" flat color="orange" to="/rules">Rules of Play</v-btn>
        <v-btn v-if="currentUser" flat color="orange" @click="logout">Logout</v-btn>
       


      </v-toolbar-items>

    </v-toolbar>




    <v-navigation-drawer class="blue lighten-5" v-model="sideNav" absolute temporary>
      <v-list>

        <v-list-tile-title v-if="currentUser === false" class="m-3 mt-4 mb-4">
          <v-icon color='orange' class="mr-2">account_box</v-icon>
          <router-link to="/login">Login</router-link>
        </v-list-tile-title>
        <v-divider v-if="currentUser === false"></v-divider>


        <v-list-tile-title v-if="currentUser === false" class="m-3 mt-4 mb-4">
          <v-icon color='orange' class="mr-2">account_circle</v-icon>
          <router-link to="/signup">Signup</router-link>
        </v-list-tile-title>
        <v-divider v-if="currentUser === false"></v-divider>


        <v-list-tile-title class="m-3 mt-4 mb-4">
          <v-icon color='orange' class="mr-2">schedule</v-icon>
          <router-link to="/schedule">Schedule</router-link>
        </v-list-tile-title>
        <v-divider></v-divider>


        <v-list-tile-title class="m-3 mt-4 mb-4">
          <v-icon color='orange' class="mr-2">chat_bubble</v-icon>
          <router-link to="/chat">Chat</router-link>
        </v-list-tile-title>
        <v-divider></v-divider>

           <v-list-tile-title class="m-3 mt-4 mb-4">
          <v-icon color='orange' class="mr-2">info</v-icon>
          <router-link to="/about">About</router-link>
        </v-list-tile-title>

         <v-divider></v-divider>

<v-list-tile-title class="m-3 mt-4 mb-4">
          <v-icon color='orange' class="mr-2">feedback</v-icon>
          <router-link to="/rules">Rules of Play</router-link>
        </v-list-tile-title>

 <v-divider></v-divider>


      </v-list>

    </v-navigation-drawer>
<!-- <Menu></Menu> -->


    <v-content>

      <div class="background">
        <router-view />
      </div>
    </v-content>

  </v-app>
</template>
<script>
// import Menu from './components/Menu.vue'

export default {
// components: {Menu}
}


</script>
<style>
  .background {
    /* background-repeat: no-repeat; */
    position: fixed;
    z-index: 1;
    background-image: url('~@/assets/fussball_rasen.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;


  }
</style>

<script>
  import firebase from 'firebase'


  export default {
  



    data() {
      return {
        sideNav: false,
        currentUser: null,
     
      }
    },

created(){

  this.checkUser();

},

beforeUpdate(){

  this.checkUser();
},

    /* eslint-disable */
    methods: {

      logout() {

        firebase.auth().signOut().then(() => {
          alert('You successfully logged out.')
          this.$router.replace('login')
        })

      },

      checkUser(){


        this.currentUser = firebase.auth().currentUser;

  

        if (this.currentUser == null){ // if there is no user

this.currentUser = false;


        }

        else { // if there is a user

this.currentUser = true;
      


        }



      }



    }


  }
</script>