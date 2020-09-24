<template>
  <div class="d-flex flex-row flex-wrap p-1">
    <works-products v-for="product in products" :key="product.id" :product="product"></works-products>
  </div>
</template>

<script>
import WorksProducts from './WorksProducts';

export default {
  components: {
    WorksProducts
  },
  props: [ 'products' ]
}
</script>

<style>

</style>