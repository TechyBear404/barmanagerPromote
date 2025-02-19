<template>
  <div class="mt-20">
    <section
      class="bg-gradient-to-br from-slate-900 to-slate-700 px-[5%] min-h-screen flex items-center gap-8"
      aria-label="Section principale"
    >
      <div class="flex-1">
        <h1 class="mb-4 text-5xl font-bold leading-tight text-white">
          BarManager - Logiciel de Caisse pour Bar et Restaurant
        </h1>
        <p class="mb-8 text-xl text-gray-400">
          Solution POS complète et intuitive pour optimiser la gestion de votre
          établissement. Commandes, stocks et analyses en temps réel pour
          maximiser vos profits.
        </p>
        <div class="flex gap-4">
          <a
            href="#demo"
            class="bg-orange-500 text-gray-50 px-8 py-4 rounded font-bold hover:-translate-y-0.5 transition-transform duration-300"
          >
            Démonstration Gratuite
          </a>
          <NuxtLink
            to="/contact"
            class="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded font-bold hover:-translate-y-0.5 transition-transform duration-300"
          >
            Contactez-nous pour un Devis
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-center flex-1">
        <img
          src=""
          alt="Interface du logiciel BarManager pour la gestion de bar et restaurant"
          class="max-w-full rounded-lg shadow-2xl"
        />
      </div>
    </section>

    <section class="bg-slate-900 px-[5%] py-20">
      <h2 class="mb-16 text-4xl font-bold text-center text-white">
        Fonctionnalités Principales de BarManager
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="p-8 text-center transition-transform duration-300 rounded-lg bg-slate-700 hover:-translate-y-1"
        >
          <font-awesome
            :icon="feature.icon"
            class="mb-4 text-3xl"
            :class="feature.iconColor"
            aria-hidden="true"
          />
          <h3 class="mb-4 text-xl font-bold" :class="feature.titleColor">
            {{ feature.title }}
          </h3>
          <p :class="feature.textColor">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const features = [
  {
    icon: "cash-register",
    iconColor: "text-orange-500",
    title: "Gestion des Commandes",
    titleColor: "text-orange-500",
    textColor: "text-gray-50",
    description:
      "Interface tactile intuitive pour une prise de commande rapide et sans erreur",
  },
  {
    icon: "chart-line",
    iconColor: "text-orange-500",
    title: "Analyse en temps réel",
    titleColor: "text-orange-500",
    textColor: "text-gray-50",
    description:
      "Tableaux de bord personnalisables pour suivre vos performances en direct",
  },
  {
    icon: "box",
    iconColor: "text-emerald-400",
    title: "Gestion des stocks",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Contrôle d'inventaire automatisé avec alertes de réapprovisionnement",
  },
  {
    icon: "users",
    iconColor: "text-emerald-400",
    title: "Gestion du Personnel",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Planification des équipes, suivi des heures et gestion des accès personnalisés",
  },
  {
    icon: "receipt",
    iconColor: "text-emerald-400",
    title: "Facturation Simplifiée",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Gestion des paiements multi-supports et édition automatique des factures",
  },
  {
    icon: "mobile-alt",
    iconColor: "text-emerald-400",
    title: "Application Mobile",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Accès à distance à vos données et gestion depuis votre smartphone",
  },
  {
    icon: "glass-cheers",
    iconColor: "text-emerald-400",
    title: "Menu Digital",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Création et mise à jour facile de vos cartes avec prix et disponibilités",
  },
  {
    icon: "table",
    iconColor: "text-emerald-400",
    title: "Plan de Salle",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Gestion visuelle des tables et suivi en temps réel de l'occupation",
  },
  {
    icon: "credit-card",
    iconColor: "text-emerald-400",
    title: "Fidélisation Clients",
    titleColor: "text-emerald-400",
    textColor: "text-gray-400",
    description:
      "Programme de fidélité intégré avec cartes et points de récompense",
  },
];

useHead({
  title: "BarManager - Logiciel de Caisse pour Bar et Restaurant",
  meta: [
    {
      name: "description",
      content:
        "Solution complète de gestion pour bars et restaurants : caisse, commandes, stocks et analyses. Interface intuitive et support 24/7. Démonstration gratuite disponible.",
    },
    {
      name: "keywords",
      content:
        "logiciel caisse bar, logiciel restaurant, système POS, gestion bar restaurant, caisse enregistreuse tactile, gestion stocks bar, analyse restaurant, facturation bar restaurant",
    },
    {
      property: "og:title",
      content: "BarManager - Logiciel de Caisse pour Bar et Restaurant",
    },
    {
      property: "og:description",
      content:
        "Solution complète de gestion pour bars et restaurants. Simplifiez vos opérations quotidiennes.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
