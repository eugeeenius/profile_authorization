import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
  },

  mutations: {
    SET_THEME(state, payload) {
      state.darkMode = payload;
    },
    SET_LOGIN_DATA(state, payload) {
      state.loginData = payload;
    },
  },

  actions: {
    setTheme({commit}, payload) {
      const strValue = JSON.stringify(payload);
      localStorage.setItem('darkMode', strValue);

      commit('SET_THEME', payload);
    },

    setIsLogged() {
      localStorage.setItem('isLogged', true);
    },

    loadAppState({commit}) {
      const theme = localStorage.getItem('darkMode');
      const themeState = JSON.parse(theme);

      commit('SET_THEME', themeState ?? false);
    },
  },
});
