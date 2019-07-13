/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default {
  state: {
    isFetching: false,
    user: {},
    successMessage: '',
  },
  mutations: {
    startAuthRequest(state) {
      state.isFetching = true;
    },
    setAuthSucces(state, user) {
      state.user = user;
    },
    endAuthRequest(state) {
      state.isFetching = true;
    },
    sestUccessfullMessage(state) {
      state.successMessage = '';
    },
  },

  actions: {
    async register({ commit }, user) {
      const data = user;
      commit('startAuthRequest');
      try {
        const response = await Vue.axios.post('/register/', data);
        const responseMessage = response.data.message;
        commit('setSuccessMessage', responseMessage);
        commit('endAuthRequest');
      } catch (error) {
        commit('endAuthRequest');
        throw new Error(error.response.data.error.message);
      }
    },
  },
};
