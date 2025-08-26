<script setup lang="ts">

</script>

<template>
    <div>
<header class="py-4 border-b">
    <nav class="flex container items-center">
      <Nuxtlink to="/" class="flex gap-1 items-center" >
        <NuxtImg width="90px" src="/logo.png" alt="" />
        <span class="text-3xl font-bold">Christian's First Nuxt</span>
      </Nuxtlink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/" icon="home"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about"> About </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/decks/decks"> Decks </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <slot/>
    </div>
</template>

