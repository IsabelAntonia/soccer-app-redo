<template>
  <div style="height: 100%; display: flex; align-items: center; justify-content: center" class="schedule">

    <div v-if="isLoading" class="loader" style="text-align:center; margin-top: 40px;">



      <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>


    </div>




    <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center"
      v-else>
      <div style="display: flex; height: 100%; justify-content: center; align-items: center" v-if="isErrored">

        <div style="text-align: center; font-weight: bold; font-size: 22px;">
          <p>Sorry! At the moment we are unable to receive the information.</p>
          <p>{{error}}</p>
        </div>



      </div>

      <div v-else>

        <v-card style="height: 480px; width: 300px; margin-bottom: 55px; padding: 20px ">

          <p style='color: orange; text-align: center; font-size: 20px; font-weight: bold'>Upcoming matches</p>



          <p style='color: orange; text-align: center; margin-top: 40px; margin-bottom: 20px'>Click on a match to
            receive more information.</p>




          <v-btn v-for="(element, index) in matches" :key="element.matchId" style="padding: 20px; width: 240px; margin-bottom: 4%;"
            flat outline color="orange" :to="{ path: `/matchdetails/${index}`}">

            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
              <p style="margin: 0; font-size: 10px">{{element.t1name}} vs. {{element.t2name}}</p>

              <p style="margin: 0; font-size: 10px">{{element.date}}</p>
            </div>

          </v-btn>



        </v-card>

      </div>


    </div>


  </div>

</template>


<script>
  export default {


    created() {
      this.$store.dispatch('fetchMatches')
    },

    computed: {

      matches() {
        return this.$store.state.matches;
      },

      isErrored() {
        return this.$store.state.errored;

      },

      isLoading() {
        return this.$store.state.isLoading;
      },
      error() {
        return this.$store.state.error;
      }



    }

  }
</script>

<style>
  .lds-default {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .lds-default div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }

  .lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 29px;
    left: 53px;
  }

  .lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 18px;
    left: 50px;
  }

  .lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 9px;
    left: 41px;
  }

  .lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 6px;
    left: 29px;
  }

  .lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 9px;
    left: 18px;
  }

  .lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 18px;
    left: 9px;
  }

  .lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 29px;
    left: 6px;
  }

  .lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 41px;
    left: 9px;
  }

  .lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 50px;
    left: 18px;
  }

  .lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 53px;
    left: 29px;
  }

  .lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 50px;
    left: 41px;
  }

  .lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 41px;
    left: 50px;
  }

  @keyframes lds-default {

    0%,
    20%,
    80%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }
  }
</style>