<template>
  <v-container
    style="height: 100%; display: flex; align-items: center; justify-content: center; padding: 0"
  >
    <Schedule v-if="currentUser"></Schedule>

    <v-card
      v-if="currentUser === false"
      style="height: 480px; width: 300px; margin-bottom: 55px; padding: 20px"
    >
      <v-card-title
        style="text-align: center; color: orange; font-size: 20px; padding: 0; font-weight: bold"
      >
        Login
        to Northside Youth Soccer League
      </v-card-title>

      <v-card-text style="padding: 10px">
        <v-text-field name="email" label="Mail" id="email" v-model="email"></v-text-field>

        <v-text-field name="password" label="Password" id="password" v-model="password"></v-text-field>
      </v-card-text>

      <v-card-actions style="display: flex; justify-content: center; padding: 0">
        <v-btn flat outline color="orange" @click="login">Login</v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <!-- <br> -->
      <div style="display: flex; justify-content: center; text-align: center">
        <router-link to="/signup">You don't have an account? Click here to create one</router-link>
      </div>

      <v-divider></v-divider>
      <!-- <br> -->
      <div style="display: flex; justify-content: center">
        <v-btn flat outline color="orange" style="margin: 0" to="/schedule">Continue without Login</v-btn>
      </div>

      <br />
      <div style="display: flex; justify-content: center; text-align: center">
        <small>You can always login later. Only the use of the chat requires you to be logged in.</small>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Schedule from "../components/Schedule.vue";
export default {
  components: { Schedule },

  data() {
    return {
      email: "",
      password: "",
      currentUser: null
    };
  },

  created() {
    this.checkUser();
  },

  beforeUpdate() {
    this.checkUser();
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("You are logged in " + user.user.email);
          this.$router.replace("chat");
        })
        .catch(err => {
          alert("Oops." + err.message);
          this.$router.replace("login");
          this.password = "";
          this.email = "";
        });
    },
    checkUser() {
      this.currentUser = firebase.auth().currentUser;

      if (this.currentUser == null) {
        // if there is no user

        this.currentUser = false;
      } else {
        // if there is a user

        this.currentUser = true;
      }
    }
  }
};
</script>

<style>
</style>

