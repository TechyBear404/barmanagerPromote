<template>
  <nav class="fixed top-0 w-full bg-gray-900 px-[5%] py-4 z-50">
    <div class="flex justify-between items-center">
      <div class="text-emerald-400 text-2xl font-bold">BarManager</div>
      <ul class="flex items-center space-x-8">
        <li>
          <NuxtLink
            to="/"
            class="text-white hover:text-emerald-400 transition-colors"
            >Accueil</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="text-white hover:text-emerald-400 transition-colors"
            >À propos</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="bg-emerald-400 text-gray-900 px-4 py-2 rounded hover:-translate-y-0.5 transition-transform duration-300"
          >
            Nous contacter
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// No additional logic for now, so the script remains empty
</script>

<style scoped></style>
