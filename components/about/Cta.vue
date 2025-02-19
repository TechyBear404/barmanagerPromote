<template>
  <section class="relative py-20 overflow-hidden bg-slate-900">
    <!-- Decorative circles -->
    <div
      class="absolute rounded-full w-96 h-96 bg-orange-500/10 blur-3xl -top-48 -left-48 animate-pulse"
    ></div>
    <div
      class="absolute delay-1000 rounded-full w-96 h-96 bg-lime-400/10 blur-3xl -bottom-48 -right-48 animate-pulse"
    ></div>

    <div class="relative px-[5%]">
      <div
        class="max-w-4xl p-8 mx-auto text-center rounded-2xl bg-slate-800/50 backdrop-blur"
      >
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full text-lime-400 bg-lime-400/10"
        >
          Démarrage Rapide
        </span>
        <h2 class="mb-6 text-4xl font-bold text-white">
          Prêt à transformer votre établissement ?
        </h2>
        <p class="max-w-2xl mx-auto mb-10 text-xl text-gray-400">
          Rejoignez notre programme beta et bénéficiez d'un accompagnement
          personnalisé ainsi que de tarifs préférentiels.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <NuxtLink
            to="/contact"
            class="relative px-10 py-5 overflow-hidden font-bold tracking-wider transition-all duration-300 rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5"
          >
            <span class="relative z-10">DEMANDER UNE DÉMO</span>
            <div
              class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
            ></div>
          </NuxtLink>
          <a
            href="tel:+32000000000"
            class="flex items-center gap-2 px-10 py-5 font-bold tracking-wider text-orange-500 transition-all duration-300 border-2 rounded-lg border-orange-500/50 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5"
          >
            <font-awesome icon="phone" />
            NOUS CONTACTER
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
