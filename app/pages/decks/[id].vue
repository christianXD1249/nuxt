<script setup>
import { decks } from '~/data/ps_decks'
const route = useRoute()

const deckId = route.params.id
const deck = decks.find(d => d.id.toString() === deckId.toString())
</script>

<template>
  <div class="p-6">
        <div v-if="deck"> 
      <h1 class="text-3xl font-bold mb-2">{{ deck.name }}</h1>

      <!-- Main + Token side by side -->
      <div class="flex gap-6 items-start">
        <!-- Main image -->
     <div class="flex gap-6 items-start">
  <!-- Main image -->
  <img 
    :src="deck.image" 
    :alt="deck.name" 
    class="rounded-xl shadow-lg w-64 h-64 object-contain"
  />

  <!-- Token image -->
  <img 
    v-if="deck.tokenImage"
    :src="deck.tokenImage" 
    alt="Token"
    class="rounded-xl shadow-md w-64 h-64 object-contain"
  />

  <img 
    v-if="deck.tokenImage2"
    :src="deck.tokenImage2" 
    alt="Token"
    class="rounded-xl shadow-md w-64 h-64 object-contain"
  />


</div>
      </div>
      <p class="text-2xl leading-relaxed mt-4">{{ deck.description }}</p>
    </div>

    <div v-else>
      <h1 class="text-red-600 font-bold text-xl">Deck not found</h1>
    </div>
  </div>
</template>
