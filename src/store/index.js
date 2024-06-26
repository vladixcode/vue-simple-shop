import { createStore } from 'vuex'
import cartStore from './modules/cart'
import productStore from './modules/product'

const store = createStore({
  modules: {
    cart: cartStore,
    product: productStore,
  },
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
