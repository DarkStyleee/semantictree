import { createStore } from "vuex";
import graphJSON from "../../glossary.json";

export default createStore({
  state: {
    glossary: null,
  },
  getters: {
    getGlossary(state) {
      return state.glossary;
    },
  },
  mutations: {
    SET_GLOSSARY(state, glossary) {
      return (state.glossary = glossary);
    },
  },
  actions: {
    async setGlossary({ commit, state }) {
      if (!state.glossary) {
        const response = await fetch("http://127.0.0.1:3333/glossary", {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        }).catch(() => commit("SET_GLOSSARY", graphJSON));
        const result = await response.json();
        commit("SET_GLOSSARY", result);
      }
    },
  },
  modules: {},
});
