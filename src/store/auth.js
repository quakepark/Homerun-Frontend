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
      state.successMessage = "";
      
    }
  },
};
