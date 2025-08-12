<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <router-link :to="`/product/${product.id}`" class="card-link">
    <div class="card">
      <div class="card-image-container">
        <img :src="product.image" :alt="product.title" class="card-image" />
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ product.title }}</h3>
        <p class="card-price">${{ product.price }}</p>
      </div>
    </div>
  </router-link>
</template>
<style scoped>
.card-link {
  text-decoration: none;
  color: inherit; /* Makes the link inherit the color of its parent */
}
.card {
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-image-container {
  width: 100%;
  height: 250px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-image {
  max-width: 100%;
  max-height: 100%;
}
.card-content {
  padding: 15px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  font-size: 16px;
  color: #333;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-price {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
}
</style>
