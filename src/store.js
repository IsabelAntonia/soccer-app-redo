import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(axios, VueAxios)


export default new Vuex.Store({
  state: {

    matches: [],
    isLoading: true,
    errored: false,
    error: null


  },
  mutations: {
    SET_MATCHES(state, matches) {
      state.matches = matches;
    },
    SET_ERRORED(state, error) {
      state.errored = true;
      state.error = error;
    },
    SET_LOADING(state) {
      state.isLoading = false;
    }


  },
  actions: {

    fetchMatches({
      commit
    }) {
      axios
        .get('https://api.myjson.com/bins/hsmpa')
        // .get('https://.myjson.com/bins/hsmpa')

        .then(response => response.data)
        .then(matches => {
          commit('SET_MATCHES', matches)
          commit('SET_LOADING');
        })
        .catch(error => {
          // console.log(error);
          commit('SET_ERRORED', error)
          commit('SET_LOADING');

        })
    }


  }
})