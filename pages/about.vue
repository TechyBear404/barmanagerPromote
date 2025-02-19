<template>
  <div class="mt-20 bg-gradient-to-br from-slate-900 to-slate-700">
    <div class="px-[5%] py-20">
      <h1 class="mb-12 text-4xl font-bold text-center text-gray-50">
        À propos de BarManager
      </h1>

      <div class="max-w-4xl mx-auto space-y-12">
        <section class="p-8 bg-slate-700 rounded-lg">
          <h2 class="mb-4 text-2xl font-bold text-orange-500">Notre Mission</h2>
          <p class="leading-relaxed text-gray-50">
            BarManager est né d'une vision simple : simplifier la gestion
            quotidienne des bars et restaurants. Notre solution POS moderne
            combine facilité d'utilisation et puissance analytique pour vous
            aider à optimiser vos opérations et maximiser vos profits.
          </p>
        </section>

        <section class="grid gap-8 md:grid-cols-2">
          <div class="p-8 bg-slate-700 rounded-lg">
            <h2 class="mb-4 text-2xl font-bold text-orange-500">
              Pourquoi nous choisir ?
            </h2>
            <ul class="space-y-3 text-gray-50">
              <li class="flex items-center space-x-2">
                <font-awesome icon="check" class="text-orange-500" />
                <span>Interface intuitive et moderne</span>
              </li>
              <li class="flex items-center space-x-2">
                <font-awesome icon="check" class="text-orange-500" />
                <span>Support technique 24/7</span>
              </li>
              <li class="flex items-center space-x-2">
                <font-awesome icon="check" class="text-orange-500" />
                <span>Mises à jour régulières</span>
              </li>
              <li class="flex items-center space-x-2">
                <font-awesome icon="check" class="text-orange-500" />
                <span>Formation complète incluse</span>
              </li>
            </ul>
          </div>

          <div class="p-8 bg-slate-700 rounded-lg">
            <h2 class="mb-4 text-2xl font-bold text-orange-500">
              Notre Expertise
            </h2>
            <ul class="space-y-3 text-gray-50">
              <li class="flex items-center space-x-2">
                <font-awesome icon="star" class="text-orange-500" />
                <span>+5 ans d'expérience</span>
              </li>
              <li class="flex items-center space-x-2">
                <font-awesome icon="star" class="text-orange-500" />
                <span>+500 établissements équipés</span>
              </li>
              <li class="flex items-center space-x-2">
                <font-awesome icon="star" class="text-orange-500" />
                <span>97% de satisfaction client</span>
              </li>
              <li class="flex items-center space-x-2">
                <font-awesome icon="star" class="text-orange-500" />
                <span>Support local en France</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title:
    "À Propos de BarManager - Expert en Solutions de Gestion Bar Restaurant",
  meta: [
    {
      name: "description",
      content:
        "Découvrez BarManager, leader français des solutions de gestion pour bars et restaurants. +500 établissements équipés, 97% de satisfaction client, support 24/7.",
    },
    {
      name: "keywords",
      content:
        "logiciel bar restaurant, solution gestion bar, système POS restauration, caisse enregistreuse bar",
    },
    {
      property: "og:title",
      content:
        "À Propos de BarManager - Expert en Solutions de Gestion Bar Restaurant",
    },
    {
      property: "og:description",
      content:
        "Leader français des solutions de gestion pour bars et restaurants avec +500 clients satisfaits.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
