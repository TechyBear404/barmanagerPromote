<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-900">
    <!-- Background Image avec overlay et dégradés -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute inset-0">
        <NuxtImg
          src="/images/pos-background.webp"
          alt="POS System"
          class="object-cover w-full h-full opacity-40 parallax-bg"
        />
      </div>
      <!-- Dégradés subtils -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent"
      ></div>
    </div>

    <!-- Cercles décoratifs flottants -->
    <div
      class="absolute rounded-full w-96 h-96 bg-orange-500/10 blur-3xl -top-48 -left-48 animate-pulse"
    ></div>
    <div
      class="absolute delay-1000 rounded-full w-96 h-96 bg-lime-400/10 blur-3xl -bottom-48 -right-48 animate-pulse"
    ></div>

    <div class="relative px-[5%] pt-32 pb-20">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- Left content -->
        <div class="relative z-10 md:opacity-0 animate-fade-in">
          <span
            class="inline-block px-4 py-2 mb-8 text-sm font-semibold rounded-full shadow-lg text-lime-400 bg-lime-400/10 shadow-lime-400/10"
          >
            Nouvelle Solution POS
          </span>
          <h1
            class="mb-8 text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl animate-slide-up [text-shadow:_0_2px_15px_rgb(0_0_0_/_50%)]"
          >
            L'avenir de la gestion de votre
            <span
              class="text-orange-500 [text-shadow:_0_2px_10px_rgb(249_115_22_/_30%)]"
              >commerce</span
            >
          </h1>
          <div class="mb-10 space-y-6">
            <p
              class="text-xl leading-relaxed tracking-wide text-gray-100 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] md:opacity-0 animate-fade-in-delay-1"
            >
              Découvrez notre système de point de vente en développement, conçu
              pour révolutionner votre quotidien.
            </p>
            <p
              class="text-xl leading-relaxed tracking-wide text-gray-100 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] md:opacity-0 animate-fade-in-delay-2"
            >
              Rejoignez notre programme beta et participez à la création d'un
              outil qui vous ressemble.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-6">
            <NuxtLink
              to="/contact"
              class="relative px-10 py-5 overflow-hidden font-bold tracking-wider transition-all duration-300 rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 md:opacity-0 animate-fade-in-delay-3"
            >
              <span class="relative z-10">DEVENIR BETA TESTEUR</span>
              <div
                class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
              ></div>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="px-10 py-5 font-bold tracking-wider text-orange-500 transition-all duration-300 border-2 rounded-lg border-orange-500/50 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5 md:opacity-0 animate-fade-in-delay-3"
            >
              EN SAVOIR PLUS
            </NuxtLink>
          </div>
        </div>

        <!-- Right content - Cards -->
        <div class="relative">
          <div class="grid gap-6">
            <!-- Card Beta -->
            <div
              class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 animate-float group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-lg aspect-square w-14 h-14 bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                >
                  <font-awesome
                    icon="rocket"
                    class="text-3xl text-orange-500 transition-transform group-hover:scale-110"
                  />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <h3 class="text-xl font-bold text-white">Programme Beta</h3>
                    <span
                      class="px-2 py-0.5 text-xs font-semibold rounded-full text-lime-400 bg-lime-400/10"
                      >OUVERT</span
                    >
                  </div>
                  <p class="text-gray-400">
                    Rejoignez-nous dès maintenant et profitez d'avantages
                    exclusifs
                  </p>
                </div>
              </div>
            </div>

            <!-- Card Innovation -->
            <div
              class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 animate-float-delay group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-lg aspect-square w-14 h-14 bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                >
                  <font-awesome
                    icon="lightbulb"
                    class="text-3xl text-orange-500 transition-transform group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-bold text-white">
                    Innovation Continue
                  </h3>
                  <p class="text-gray-400">
                    Une solution qui évolue selon vos besoins et suggestions
                  </p>
                </div>
              </div>
            </div>

            <!-- Card Support -->
            <div
              class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 animate-float group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-lg aspect-square w-14 h-14 bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                >
                  <font-awesome
                    icon="headset"
                    class="text-3xl text-orange-500 transition-transform group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-bold text-white">
                    Support Dédié
                  </h3>
                  <p class="text-gray-400">
                    Accompagnement personnalisé tout au long de la phase beta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useParallax } from "~/composables/useParallax";

useParallax();
</script>
