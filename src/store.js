import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  input: {
    name: "",
    email: "",
    gender: "",
    country: ""
  }
};

const mutations = {
  updateInput(state, payload) {
    state.input = payload;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
