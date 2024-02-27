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
    addProductToCart(context, productData) {
      const productInCartIndex = context.state.items.findIndex(
        (ci) => ci.productId === productData.id,
      )

      if (productInCartIndex >= 0) {
        const newItemQty = context.state.items[productInCartIndex].qty + 1
        context.commit('setProductInItemsQuantity', {
          productInCartIndex,
          quantity: newItemQty,
        })
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        }
        context.commit('addProduct', newItem)
      }
      const newCartQty = context.state.qty + 1
      context.commit('setQuantity', newCartQty)

      const newCartTotal = context.state.total + productData.price
      context.commit('setTotal', newCartTotal)
    },
    removeProductFromCart(context, prodId) {
      const productInCartIndex = context.state.items.findIndex(
        (cartItem) => cartItem.productId === prodId,
      )
      const prodData = context.state.items[productInCartIndex]

      context.commit('removeProductFromItems', productInCartIndex)

      const newCartQty = context.state.qty - prodData.qty
      context.commit('setQuantity', newCartQty)

      const newCartTotal = context.state.total - prodData.price * prodData.qty
      context.commit('setTotal', newCartTotal)
    },
  },
  mutations: {
    setQuantity(state, quantity) {
      state.qty = quantity
    },
    setProductInItemsQuantity(state, { productInCartIndex, quantity }) {
      state.items[productInCartIndex].qty = quantity
    },
    addProduct(state, product) {
      state.items.push(product)
    },
    removeProductFromItems(state, productId) {
      state.items.splice(productId, 1)
    },
    setTotal(state, amount) {
      state.total = amount
    },
  },
}

export default cartStore
