<script setup>
import { RouterLink } from 'vue-router'

import { useCartStore } from '../stores/cart.js'

const cartStore = useCartStore()
</script>
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="brand-logo">Vue Finds</RouterLink>
      <ul class="nav-links">
        <li><RouterLink to="/">Products</RouterLink></li>
        <li>
          <RouterLink to="/cart" class="cart-link">
            Cart
            <!-- 3. DISPLAY the count from the store's getter.
                 This will automatically update whenever the cart changes! -->
            <span v-if="cartStore.cartItemCount > 0" class="cart-badge">
              {{ cartStore.cartItemCount }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Let's add some professional styling for our navbar */
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.brand-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}
.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #42b883; /* Vue Green */
}
.cart-link {
  position: relative;
  display: flex;
  align-items: center;
}
.cart-badge {
  position: absolute;
  top: -8px;
  right: -15px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}
</style>
