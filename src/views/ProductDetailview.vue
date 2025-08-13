<script setup>
import { ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

import { useCartStore } from '../stores/cart.js'

const route = useRoute()

const cartstore = useCartStore()

const productId = route.params.id

const product = ref(null)
const isLoading = ref(true)
const error = ref(null)

function handleAddtoCart() {
  if (product.value) {
    cartstore.addToCart(product.value)
    alert(`${product.value.title}  has been added to your cart!`)
  }
}

async function fecthProduct() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    if (!response.ok) {
      throw new Error('something is wrong')
    }
    product.value = await response.json()
  } catch (err) {
    console.error(err)
    error.value = ' Faliled to load product detail'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fecthProduct()
})
</script>

<template>
  <dev class="product-detail">
    <dev v-if="isLoading" class="feedback">isLoading... </dev>
    <dev v-else-if="error" class="feedback error">{{ error }}</dev>
    <dev v-else-if="product" class="detail-container">
      <div class="image-column">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="info-column">
        <h1 class="title">{{ product.title }}</h1>
        <p class="category">{{ product.category }}</p>
        <p class="description">{{ product.description }}</p>
        <p class="price">${{ product.price }}</p>
        <button @click="handleAddtoCart" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </dev>
  </dev>
</template>
<style scoped>
/* Let's add some nice styling for our detail page */
.product-detail {
  padding: 40px 20px;
}
.feedback {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 50px;
}
.error {
  color: #e74c3c;
}
.detail-container {
  display: flex;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}
.image-column {
  flex: 1;
}
.image-column img {
  max-width: 100%;
  border-radius: 10px;
}
.info-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 2.5rem;
  margin: 0;
}
.category {
  font-style: italic;
  color: #888;
  margin: 10px 0;
}
.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  flex-grow: 1; /* Pushes the price and button to the bottom */
}
.price {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 20px 0;
}
.add-to-cart-btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.add-to-cart-btn:hover {
  background-color: #229954;
}
</style>
