<template>
  <section class="relative min-h-[60vh] overflow-hidden bg-slate-900">
    <!-- Background Image avec overlay et dégradés -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute inset-0">
        <img
          src="/images/pos-background.webp"
          alt="Contact"
          class="object-cover w-full h-full opacity-40 parallax-bg"
        />
      </div>
      <!-- Dégradés -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900/85"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"
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
          Contact
        </span>
        <h1
          class="mb-8 text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl [text-shadow:_0_2px_15px_rgb(0_0_0_/_50%)]"
        >
          Parlons de votre
          <span
            class="text-orange-500 [text-shadow:_0_2px_10px_rgb(249_115_22_/_30%)]"
            >projet</span
          >
        </h1>
        <p
          class="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300"
        >
          Que vous soyez intéressé par notre programme beta ou que vous ayez des
          questions, nous sommes là pour vous accompagner dans votre démarche.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useParallax } from "~/composables/useParallax";

useParallax();
</script>
