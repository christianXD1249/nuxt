<script setup>
import { decks } from '~/data/ps_decks'; 

const edh = decks;

</script>

<template>
  <div>
    <h1>Commander Decks</h1>
    <div style="display:flex; gap:1rem;">
    <NuxtLink
  v-for="deck in edh"
  :key="deck.id"
  :to="`/decks/${deck.id}`"
>
  <NuxtImg 
    :src="deck.image"
    class="w-48 h-36 object-contain bg-white rounded-md p-2"
    alt="Product image"
  />
</NuxtLink>

    </div>
  </div>
</template>
