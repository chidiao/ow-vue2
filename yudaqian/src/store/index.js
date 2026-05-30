import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: {}
  },
  mutations: {
    setCompany(state, data) {
      state.company = data
    }
  },
  actions: {
  },
  modules: {
  }
})
