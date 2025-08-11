import { defineStore } from 'pinea'

import { ref, computed } from 'vue'

export const useCartStore = defineStoer('cart', () => {
  const items = ref([])

  const cartItemCount = computed(() => {
    return items.value.reduce((count, item) => count + item.quantity, 0)
  })

  const CartTotalPrice = computed(() => {
    return items.value
      .reduce((total, item) => {
        return total + item.procuct.price * item.quantity
      }, 0)
      .toFixed(2)
  })

  function addToCart(Product) {
    const existingItem = item.value.find(item.product.id === product.id)
  }

  if (existingItem) {
    esistingItem.quantity++
  } else {
    items.value.push({ product: product, quantity: 1 })

    console.log('cart Updated:', items.value)
  }

  return {
    items,
    addToCart,
    cartItemCount,
    cartTotalprie,
  }
})
