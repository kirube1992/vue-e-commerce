<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const products = ref([])
const isLoading = ref(true)
const error = ref(null)
async function fetchProduct() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('somthing error')
    }
    const data = await response.json()

    products.value = data
  } catch (err) {
    console.error(err)
    error.value = 'Could not load products. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <div class="home-page">
    <h1 class="page-title">Our Products</h1>

    <div v-if="isLoading" class="feedback">Loading products...</div>
    <div v-else-if="error" class="feedback error">{{ error }}</div>

    <div v-else class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 20px;
}
.page-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #2c3e50;
}
.feedback {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
}
.error {
  color: #e74c3c;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
</style>
