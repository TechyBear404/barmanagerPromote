<template>
  <section class="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="px-[5%]">
      <div class="mb-16 text-center">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-500 rounded-full bg-orange-500/10"
        >
          Programme Beta
        </span>
        <h2 class="mb-6 text-4xl font-bold text-white">
          Devenez un de nos premiers testeurs
        </h2>
        <p class="max-w-2xl mx-auto text-gray-400">
          Participez à l'évolution du produit et bénéficiez d'avantages
          exclusifs
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="p-8 transition-all md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl hover:bg-slate-700/50 animate-fade-in-up"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
            >
              <font-awesome icon="rocket" class="text-3xl text-orange-500" />
            </div>
            <div>
              <h3 class="font-bold text-white">Accès Anticipé</h3>
              <p class="text-sm text-gray-400">Avantage Beta</p>
            </div>
          </div>
          <p class="text-gray-400">
            Soyez parmi les premiers à découvrir et utiliser notre solution
            innovante.
          </p>
        </div>

        <div
          class="p-8 transition-all md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl hover:bg-slate-700/50 animate-fade-in-up delay-200"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
            >
              <font-awesome icon="comments" class="text-3xl text-orange-500" />
            </div>
            <div>
              <h3 class="font-bold text-white">Co-création</h3>
              <p class="text-sm text-gray-400">Influence Directe</p>
            </div>
          </div>
          <p class="text-gray-400">
            Contribuez directement à l'évolution du produit avec vos retours
            d'expérience.
          </p>
        </div>

        <div
          class="p-8 transition-all md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl hover:bg-slate-700/50 animate-fade-in-up delay-400"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
            >
              <font-awesome icon="gift" class="text-3xl text-orange-500" />
            </div>
            <div>
              <h3 class="font-bold text-white">Offre Spéciale</h3>
              <p class="text-sm text-gray-400">Tarif Préférentiel</p>
            </div>
          </div>
          <p class="text-gray-400">
            Bénéficiez de conditions tarifaires exceptionnelles réservées aux
            beta testeurs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useDevice } from "~/composables/useDevice";

const { isMobile } = useDevice();
const testimonialsVisible = ref(true);
</script>
