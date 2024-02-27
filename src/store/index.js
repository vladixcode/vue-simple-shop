import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn
    },
  },
  actions: {
    login(context) {
      context.commit('login')
    },
    logout(context) {
      context.commit('logout')
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
})

export default store
