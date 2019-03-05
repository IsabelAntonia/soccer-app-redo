<template>
          <v-app>
           

          <v-toolbar class="blue lighten-5">
              <v-toolbar-side-icon @click="sideNav = true" class="hidden-sm-and-up"></v-toolbar-side-icon>

              <v-toolbar-title>Menu</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-xs-only">
                <v-btn flat  color="orange" to="/login">Login</v-btn>
                  <v-btn flat  color="orange" to="/signup">Signup</v-btn>
                  <v-btn flat  color="orange" to="/schedule">Schedule</v-btn>
                  <v-btn flat  color="orange" to="/chat">Chat</v-btn>
                  
                
              </v-toolbar-items>

          </v-toolbar>
          <v-navigation-drawer class="blue lighten-5" v-model="sideNav" absolute temporary>
             <v-list>

                 <v-list-tile-title class="m-3 mt-4 mb-4">
                     <v-icon class="mr-2">account_box</v-icon>
                     <router-link to="/login">Login</router-link>
                 </v-list-tile-title>
                 <v-divider></v-divider>


                 <v-list-tile-title class="m-3 mt-4 mb-4">
                     <v-icon class="mr-2">account_circle</v-icon>
                     <router-link to="/signup">Signup</router-link>
                 </v-list-tile-title>
                 <v-divider></v-divider>


                  <v-list-tile-title class="m-3 mt-4 mb-4">
                     <v-icon class="mr-2">schedule</v-icon>
                     <router-link to="/schedule">Schedule</router-link>
                 </v-list-tile-title>
                 <v-divider></v-divider>


                  <v-list-tile-title class="m-3 mt-4 mb-4">
                     <v-icon class="mr-2">chat_bubble</v-icon>
                     <router-link to="/chat">Chat</router-link>
                 </v-list-tile-title>
                 <v-divider></v-divider>
                
                

                 </v-list>

             </v-navigation-drawer>
             
             <v-content>

<div class="background">
             <router-view/>
</div>
             </v-content>

           </v-app>
</template>

<script>


export default {
  name: 'App',

 
  
  data () {
    return {
      sideNav: false
    }
  }
}
</script>

<style>

.background{
      /* background-repeat: no-repeat; */
        position: fixed;
        z-index: 1;
        background-image: url('~@/assets/fussball_rasen.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;


    }


</style>

