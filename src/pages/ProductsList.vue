<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :id="prod.id"
        :key="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue'

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters['product/products']
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
