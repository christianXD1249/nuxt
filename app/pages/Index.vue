<template>
<main> 
 <section class="bg-[#000000]">
      <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div  class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Welcome to Christian's First Nuxt 3 APP
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
           Look at the other pages to see more content!
          </p>
          <button
            class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
            Browse the App
            <NuxtLink to="/decks/decks" class="ml-2">➡</NuxtLink>
          </button>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg src="/christian.jpg" densities="x1" alt="" />
        </div>
      </div>
    </section>
</main>
</template>