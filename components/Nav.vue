<template>
  <nav
    class="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm px-[5%] py-4 z-50 border-b border-orange-700/50 shadow-lg shadow-orange-900/20"
  >
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div
          class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
        >
          <font-awesome
            icon="glass-martini-alt"
            class="text-orange-500 transition-transform group-hover:scale-110"
          />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold text-orange-500">HorecaFlow</span>
          <span
            class="px-2 py-1 text-xs font-semibold rounded-full text-lime-400 bg-lime-400/10"
            >BETA</span
          >
        </div>
      </NuxtLink>

      <!-- Navigation Desktop -->
      <ul class="items-center hidden space-x-8 md:flex">
        <li>
          <NuxtLink
            to="/"
            class="transition-colors text-gray-50 hover:text-orange-500"
            exact-active-class="font-bold text-orange-500"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="transition-colors text-gray-50 hover:text-orange-500"
            exact-active-class="font-bold text-orange-500"
          >
            À propos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="relative px-6 py-2 overflow-hidden font-bold transition-all rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-lg hover:shadow-orange-500/20"
          >
            <span class="relative z-10">Nous contacter</span>
            <div
              class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
            ></div>
          </NuxtLink>
        </li>
      </ul>

      <!-- Bouton Menu Mobile -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="transition-colors md:hidden text-gray-50 hover:text-orange-500"
      >
        <font-awesome :icon="isMenuOpen ? 'times' : 'bars'" class="text-2xl" />
      </button>
    </div>

    <!-- Menu Mobile -->
    <div
      v-show="isMenuOpen"
      class="absolute left-0 w-full top-full bg-slate-900/95 backdrop-blur-sm md:hidden"
    >
      <ul class="px-[5%] py-6 space-y-4">
        <li>
          <NuxtLink
            to="/"
            class="block py-2 transition-colors text-gray-50 hover:text-orange-500"
            exact-active-class="font-bold text-orange-500"
            @click="isMenuOpen = false"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="block py-2 transition-colors text-gray-50 hover:text-orange-500"
            exact-active-class="font-bold text-orange-500"
            @click="isMenuOpen = false"
          >
            À propos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="block py-2 transition-colors text-gray-50 hover:text-orange-500"
            @click="isMenuOpen = false"
          >
            Nous contacter
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

// Fermer le menu quand on change de page
watch(
  () => useRoute().fullPath,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<style scoped></style>
