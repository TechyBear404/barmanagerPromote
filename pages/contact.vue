<template>
  <div
    class="mt-20 px-[5%] py-20 bg-gradient-to-br from-slate-900 to-slate-700"
  >
    <h1 class="mb-12 text-4xl font-bold text-center text-gray-50">
      Contactez-nous
    </h1>

    <div class="grid max-w-4xl gap-12 mx-auto md:grid-cols-2">
      <div class="p-8 bg-slate-700 rounded-lg">
        <h2 class="mb-6 text-2xl font-bold text-orange-500">
          Informations de contact
        </h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <font-awesome icon="envelope" class="text-orange-500" />
            <a
              href="mailto:techybear404@gmail.com"
              class="text-gray-50 transition-colors hover:text-orange-500"
            >
              techybear404@gmail.com
            </a>
          </div>
          <div class="flex items-center space-x-3">
            <font-awesome icon="phone" class="text-orange-500" />
            <span class="text-gray-50">+33 (0)6 XX XX XX XX</span>
          </div>
        </div>
      </div>

      <form class="p-8 space-y-6 bg-slate-700 rounded-lg">
        <div>
          <label class="block mb-2 text-gray-50">Nom</label>
          <input
            type="text"
            class="w-full px-4 py-2 text-gray-50 bg-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label class="block mb-2 text-gray-50">Email</label>
          <input
            type="email"
            class="w-full px-4 py-2 text-gray-50 bg-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label class="block mb-2 text-gray-50">Message</label>
          <textarea
            rows="4"
            class="w-full px-4 py-2 text-gray-50 bg-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>
        <button
          class="w-full bg-orange-500 text-gray-50 py-3 rounded font-bold hover:-translate-y-0.5 transition-transform duration-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title:
    "Contact BarManager - Demandez une Démo de Notre Solution Bar Restaurant",
  meta: [
    {
      name: "description",
      content:
        "Contactez BarManager pour une démonstration gratuite de notre solution de gestion bar restaurant. Support technique 24/7, formation incluse.",
    },
    {
      name: "keywords",
      content:
        "contact BarManager, demo logiciel bar, solution gestion restaurant, système caisse bar",
    },
    {
      property: "og:title",
      content:
        "Contact BarManager - Demandez une Démo de Notre Solution Bar Restaurant",
    },
    {
      property: "og:description",
      content:
        "Contactez-nous pour découvrir comment BarManager peut optimiser la gestion de votre établissement.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
