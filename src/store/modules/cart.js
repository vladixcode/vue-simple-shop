const cartStore = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    }
  },
  getters: {
    quantity(state) {
      return state.qty
    },
    items(state) {
      return state.items
    },
    total(state) {
      return state.total.toFixed(2)
    },
  },
  actions: {
    addToCart(context, payload) {
      const productId = payload.id
      const product = context.rootGetters['product/products'].find(
        (product) => product.id === productId,
      )
      context.commit('addProductToCart', product)
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload)
    },
  },
  mutations: {
    addProductToCart(state, productData) {
      const productInCartIndex = state.items.findIndex((ci) => ci.productId === productData.id)

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++
      } else {
        state.items.push({
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        })
      }

      state.qty++
      state.total += productData.price
    },
    removeProductFromCart(state, prodId) {
      const productInCartIndex = state.items.findIndex((cartItem) => cartItem.productId === prodId)
      const prodData = state.items[productInCartIndex]

      state.items.splice(productInCartIndex, 1)
      state.qty -= prodData.qty
      state.total -= prodData.price * prodData.qty
    },
  },
}

export default cartStore
