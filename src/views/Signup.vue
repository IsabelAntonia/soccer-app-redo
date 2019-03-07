<template>

  <v-container style="height: 100%; display: flex; align-items: center; justify-content: center">



    <v-card style="height: 480px; width: 300px; margin-bottom: 55px; padding: 20px">
      <v-card-title style="text-align: center; color: orange; font-size: 20px; padding: 0; font-weight: bold">Sign up
        to Northside Youth Soccer League</v-card-title>

      <v-card-text style="padding: 10px">


        <v-text-field name="email" label="Mail" id="email" v-model="email">
        </v-text-field>



        <v-text-field name="password" label="Password" id="password" v-model="password">
        </v-text-field>



      </v-card-text>



      <v-card-actions style="display: flex; justify-content: center; padding-top: 0">
        <v-btn flat outline color="orange" @click="signup">Signup</v-btn>


      </v-card-actions>
      <!-- <br> -->
      <v-divider></v-divider>
      <br>

      <div style="display: flex; justify-content: center">
        <router-link to="/login">Or go back to Login</router-link>
      </div>



    </v-card>









  </v-container>

</template>

<script>
  import firebase from 'firebase'
  export default {

    data() {
      return {
        email: '',
        password: ''
      }
    },


    methods: {

      signup(){

        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) =>
        {this.$router.replace('chat')
        alert('Your account has been created!')},

        (err) => {
          alert('Oops.' + err.message)
        }
        
        );
      }
    }

  }
</script>

<style>

</style>