import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    user: null,
    isLoading: false,
    setIsLogged: false,
  },

  actions: {
    setTheme({commit}, payload) {
      const strValue = JSON.stringify(payload);
      localStorage.setItem('darkMode', strValue);

      commit('SET_THEME', payload);
    },

    loadAppState({commit}) {
      const theme = JSON.parse(localStorage.getItem('darkMode'));
      commit('SET_THEME', theme ?? false);

      const user = JSON.parse(sessionStorage.getItem('user'));
      commit('SET_USER', user);
    },

    async fetchUserData({commit}) {
      try {
        const url = 'https://randomuser.me/api/';
        const data = await fetch(url).then(res => res.json());
        const user = data?.results?.[0];

        await new Promise(res => {
          setTimeout(res, 3000);
        });

        sessionStorage.setItem('user', user ? JSON.stringify(user) : 'null');
        commit('SET_USER', user);
      } catch(e) {
        console.warn('[store/fetchUserData]: ', e);
      }
    },

    setIsLoading({commit}, payload) {
      commit('SET_IS_LOADING', payload);
    },
  },

  mutations: {
    SET_THEME(state, payload) {
      state.darkMode = payload;
    },

    SET_USER(state, payload) {
      state.user = payload;
    },

    SET_IS_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },

  getters: {
    getLoadingState: state => state.isLoading,
  },
});
