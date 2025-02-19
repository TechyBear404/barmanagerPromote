<template>
  <div class="mt-20">
    <section
      class="bg-gradient-to-br from-gray-900 to-gray-800 px-[5%] min-h-screen flex items-center gap-8"
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
            class="bg-emerald-400 text-gray-900 px-8 py-4 rounded font-bold hover:-translate-y-0.5 transition-transform duration-300"
          >
            Démonstration Gratuite
          </a>
          <a
            href="#contact"
            class="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded font-bold hover:-translate-y-0.5 transition-transform duration-300"
          >
            Contactez-nous pour un Devis
          </a>
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

    <section class="bg-gray-900 px-[5%] py-20">
      <h2 class="mb-16 text-4xl font-bold text-center text-white">
        Fonctionnalités Principales de BarManager
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-cash-register text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Gestion des Commandes
          </h3>
          <p class="text-gray-400">
            Interface tactile intuitive pour une prise de commande rapide et
            sans erreur
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-chart-line text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Analyse en temps réel
          </h3>
          <p class="text-gray-400">
            Tableaux de bord personnalisables pour suivre vos performances en
            direct
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-box text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Gestion des stocks
          </h3>
          <p class="text-gray-400">
            Contrôle d'inventaire automatisé avec alertes de réapprovisionnement
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-users text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Gestion du Personnel
          </h3>
          <p class="text-gray-400">
            Planification des équipes, suivi des heures et gestion des accès
            personnalisés
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-receipt text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Facturation Simplifiée
          </h3>
          <p class="text-gray-400">
            Gestion des paiements multi-supports et édition automatique des
            factures
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-mobile-alt text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Application Mobile
          </h3>
          <p class="text-gray-400">
            Accès à distance à vos données et gestion depuis votre smartphone
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-glass-cheers text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">Menu Digital</h3>
          <p class="text-gray-400">
            Création et mise à jour facile de vos cartes avec prix et
            disponibilités
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-table text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">Plan de Salle</h3>
          <p class="text-gray-400">
            Gestion visuelle des tables et suivi en temps réel de l'occupation
          </p>
        </article>

        <article
          class="p-8 text-center transition-transform duration-300 bg-gray-800 rounded-lg hover:-translate-y-1"
        >
          <i
            class="mb-4 text-3xl fas fa-credit-card text-emerald-400"
            aria-hidden="true"
          ></i>
          <h3 class="mb-4 text-xl font-bold text-emerald-400">
            Fidélisation Clients
          </h3>
          <p class="text-gray-400">
            Programme de fidélité intégré avec cartes et points de récompense
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
