// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';

Vue.use(Vuex);

const state = {
  is_login: true
};

export default new Vuex.Store({
  state,
  mutations
});
