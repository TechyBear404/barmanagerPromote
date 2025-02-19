<template>
  <section class="relative min-h-[70vh] overflow-hidden bg-slate-900">
    <!-- Background Image avec overlay et dégradés -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute -inset-10">
        <NuxtImg
          src="/images/about-background.webp"
          alt="POS System"
          class="object-cover w-full h-full origin-top opacity-40 parallax-bg"
        />
      </div>
      <!-- Dégradés  -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900/85"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/20 to-slate-900/50"
      ></div>
    </div>

    <!-- Decorative circles -->
    <div
      class="absolute rounded-full w-96 h-96 bg-orange-500/10 blur-3xl -top-48 -left-48 animate-pulse"
    ></div>
    <div
      class="absolute delay-1000 rounded-full w-96 h-96 bg-lime-400/10 blur-3xl -bottom-48 -right-48 animate-pulse"
    ></div>

    <div class="relative px-[5%] pt-32 pb-20">
      <div class="max-w-4xl mx-auto text-center">
        <span
          class="inline-block px-4 py-2 mb-8 text-sm font-semibold rounded-full shadow-lg text-lime-400 bg-lime-400/10 shadow-lime-400/10"
        >
          Notre Vision
        </span>
        <h1
          class="mb-8 text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl [text-shadow:_0_2px_15px_rgb(0_0_0_/_50%)]"
        >
          Une startup innovante née d'une
          <span
            class="text-orange-500 [text-shadow:_0_2px_10px_rgb(249_115_22_/_30%)]"
            >passion</span
          >
        </h1>
        <p
          class="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300"
        >
          Notre mission est de créer la prochaine génération d'outils de gestion
          pour bars et restaurants. Rejoignez-nous dès maintenant dans cette
          aventure et contribuez à façonner l'avenir du secteur HoReCa.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <NuxtLink
            to="/contact"
            class="relative px-10 py-5 overflow-hidden font-bold tracking-wider transition-all duration-300 rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5"
          >
            <span class="relative z-10">DEVENIR BETA TESTEUR</span>
            <div
              class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
            ></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useParallax } from "~/composables/useParallax";

useParallax();
</script>
