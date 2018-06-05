import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import commodity from './modules/commodity';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    commodity
  }
});
