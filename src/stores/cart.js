import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const cartItemCount = computed(() => {
    return items.value.reduce((count, item) => count + item.quantity, 0)
  })

  const CartTotalPrice = computed(() => {
    return items.value
      .reduce((total, item) => {
        return total + item.product.price * item.quantity
      }, 0)
      .toFixed(2)
  })

  function addToCart(product) {
    const existingItem = items.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ product: product, quantity: 1 })

      console.log('cart Updated:', items.value)
    }
  }

  return {
    items,
    addToCart,
    cartItemCount,
    CartTotalPrice,
  }
})
