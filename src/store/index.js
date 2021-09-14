import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    user: null,
    isLoading: false,
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
      const theme = JSON.parse(localStorage.getItem('darkMode'));
      commit('SET_THEME', theme ?? false);

      const user = JSON.parse(sessionStorage.getItem('user'));
      commit('SET_USER', user);
    },

    async fetchUserData() {
      try {
        const url = 'https://randomuser.me/api/';
        const data = await fetch(url).then(res => res.json());
        const user = data?.results?.[0];

        await new Promise(res => {
          setTimeout(res, 3000);
        });

        await this.setUser(user);
      } catch(e) {
        console.warn('[store/fetchUserData]: ', e);
      }
    },

    setUser({commit}, payload) {
      sessionStorage.setItem('user', payload ? JSON.stringify(payload) : null);
      commit('SET_USER', payload);
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
    //     SET_LOGIN_DATA(state, payload) {
    //       state.loginData = payload;
    //     },

    SET_IS_LOADING(state, payload) {
      console.log(payload);
      state.isLoading = payload;
    },
  },

  getters: {
    getLoadingState: state => state.isLoading,
  },
});
