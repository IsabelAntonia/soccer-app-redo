<template>
  <v-app>

<Menu></Menu>


    <v-content>

      <div class="background">
        <router-view />
      </div>
    </v-content>

  </v-app>
</template>
<script>
import Menu from './components/Menu.vue'

export default {
components: {Menu}
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