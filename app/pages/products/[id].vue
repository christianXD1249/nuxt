<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// generate multiple images for this product

const products = [
  { id: "1", name: "Red Shirt", price: "$20", description: "A bright red t-shirt.", image: "https://contents.mediadecathlon.com/p2606947/k$1c9e0ffdefc3e67bdeabc82be7893e93/men-s-running-t-shirt-red-decathlon-8771124.jpg" },
  { id: "2", name: "Blue Shoes", price: "$50", description: "Comfortable running shoes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCD0LQrRafrqA_UEa8jMUkNT4jw48hJOHBw&s" },
  { id: "3", name: "Green Hat", price: "$15", description: "A stylish green cap.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJEz6JSudNRSFbNTQ6AjoW-Yl8EuBLqiejQ&s" },
]
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Price: {{ product.price }}</p>
    <p>{{ product.description }}</p>
    <NuxtImg :src="product.image" alt="Product image" />

    <p><NuxtLink to="/products/product">⬅ Back to catalog</NuxtLink></p>
  </div>

  <div v-else>
    <h1>Product not found</h1>
    <NuxtLink to="/products/product">⬅ Back to catalog</NuxtLink>
  </div>
</template>
