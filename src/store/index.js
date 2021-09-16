import Vue from 'vue';
import Vuex from 'vuex';
import {dateToString} from '../assets/js/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    user: null,
    isLoading: false,
    isLogged: false,
  },

  getters: {
    getLoadingState: state => state.isLoading,

    getProfileInfoFields: state => ([
      {
        title: 'First Name',
        value: state.user?.name.first ?? '',
        mask: '',
      },
      {
        title: 'Last Name',
        value: state.user?.name.last ?? '',
        mask: '',
      },
      {
        title: 'Email',
        value: state.user?.email ?? '',
        mask: '',
      },
      {
        title: 'Phone',
        value: state.user?.phone ?? '',
        mask: '(###) ###-####',
      },
      {
        title: 'Location',
        value: state.user.location?.city && state.user.location?.state
          ? state.user?.location.state + ', ' +state.user?.location.city
          : '',
        mask: '',
      },
      {
        title: 'Date of Birth',
        value: state.user?.dob.date ? dateToString(new Date(state.user.dob.date)) : '',
        mask: '##.##.####',
      },
    ]),
  },

  actions: {
    setTheme({commit}, payload) {
      const strValue = JSON.stringify(payload);
      localStorage.setItem('darkMode', strValue);

      commit('SET_THEME', payload);
    },

    loadAppState({commit}) {
      const theme = JSON.parse(localStorage.getItem('darkMode'));
      commit('SET_THEME', theme ?? true);

      const user = JSON.parse(sessionStorage.getItem('user'));
      commit('SET_USER', user);

      const logged = JSON.parse(localStorage.getItem('isLogged'));
      commit('SET_IS_LOGGED', logged);
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

    setUserInfo({commit}, payload) {
      commit('SET_USER', payload);
    },

    setIsLogged({commit}, payload) {
      commit('SET_IS_LOGGED', payload);
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

    SET_IS_LOGGED(state, payload) {
      state.isLogged = payload;
    },
  },
});
