<template>
  <div>
    <h1>Products</h1>
    <div style="display:flex; gap:1rem;">
      <NuxtLink v-for="id in 3" :key="id" :to="`/products/${id}`">
        <NuxtImg :src="`https://picsum.photos/seed/${id}/200/150`" />
      </NuxtLink>
      <app-home-bt />
     </div>
    </div>
</template>
