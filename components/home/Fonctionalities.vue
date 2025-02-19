<template>
  <section
    class="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    v-intersect:once="{
      handler: onFeaturesIntersect,
      options: { threshold: 0.1, rootMargin: '50px 0px' },
    }"
  >
    <div class="px-[5%]">
      <div class="mb-16 text-center">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-500 rounded-full bg-orange-500/10"
        >
          Fonctionnalités
        </span>
        <h2 class="mb-6 text-4xl font-bold text-white">
          Tout ce dont vous avez besoin
        </h2>
        <p class="max-w-2xl mx-auto text-gray-400">
          Une suite complète d'outils conçue pour optimiser chaque aspect de
          votre établissement
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="p-8 transition-all duration-300 transform md:opacity-0 group bg-slate-900/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-4"
          :class="{ 'animate-fade-in-up': featuresVisible }"
          :style="{
            'animation-delay': featuresVisible ? `${index * 200}ms` : '0ms',
          }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div
              class="flex items-center justify-center w-16 h-16 rounded-lg aspect-square bg-gradient-to-br from-orange-500/20 to-lime-400/20"
            >
              <font-awesome
                :icon="feature.icon"
                class="text-3xl text-orange-500 transition-transform group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
            <h3 class="text-xl font-bold text-white">
              {{ feature.title }}
            </h3>
          </div>
          <p class="text-gray-400">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useDevice } from "~/composables/useDevice";

const { isMobile } = useDevice();
const featuresVisible = ref(false);

const features = [
  {
    icon: "cash-register",
    title: "Caisse Enregistreuse et Gestion des Commandes",
    description:
      "Système de point de vente intuitif permettant une prise de commande rapide et sécurisée, avec gestion optimisée des transactions et des paiements.",
  },
  {
    icon: "chart-line",
    title: "Analyse des Ventes et Performances",
    description:
      "Tableaux de bord personnalisables pour un suivi en temps réel des ventes, des transactions et des rapports financiers détaillés.",
  },
  {
    icon: "box",
    title: "Gestion d'Inventaire Automatisée",
    description:
      "Contrôle efficace des stocks avec alertes de réapprovisionnement et suivi des mouvements pour une gestion optimisée des approvisionnements.",
  },
  {
    icon: "users",
    title: "Gestion du Personnel et Accès Sécurisés",
    description:
      "Planification des équipes, suivi des heures de travail et gestion personnalisée des accès pour plus de flexibilité et de sécurité.",
  },
  {
    icon: "receipt",
    title: "Facturation et Paiement Simplifiés",
    description:
      "Émission automatique de factures et compatibilité avec plusieurs méthodes de paiement, garantissant une gestion fluide et sécurisée des transactions.",
  },
  {
    icon: "mobile-alt",
    title: "Application Mobile et Accès à Distance",
    description:
      "Gérez vos ventes, vos commandes et vos rapports financiers en temps réel depuis votre smartphone ou tablette grâce à une interface ergonomique.",
  },
  {
    icon: "glass-cheers",
    title: "Menu Digital et Gestion des Produits",
    description:
      "Mise à jour simple et rapide de votre carte, gestion des prix et disponibilité en temps réel pour améliorer l'expérience client.",
  },
  {
    icon: "table",
    title: "Plan de Salle et Gestion des Tables",
    description:
      "Affichage interactif des tables avec suivi en temps réel de l'occupation et des commandes pour une gestion optimisée du service.",
  },
  {
    icon: "credit-card",
    title: "Programme de Fidélisation Clients",
    description:
      "Intégration d'un système de fidélité avec cartes, points de récompense et suivi des transactions pour renforcer l'engagement client.",
  },
];

const onFeaturesIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    featuresVisible.value = true;
  }
};
</script>
