<script setup>
import { ref, onMounted, resolveComponent } from 'vue'

const product = ref([])
const isLoading = ref(true)
const error = ref([null])

async function fetchProduct() {
  try {
    const response = await fetch('https://fakestoreapi.com/')
    if (!response.ok) {
      throw new error('somthing error')
    }
    const data = response.json()

    product.value = data
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

<template></template>
<style scoped></style>
