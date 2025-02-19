<template>
  <div>
    <!-- Hero Section -->
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
          class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"
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
          <!-- Contenu texte avec ombre portée renforcée -->
          <div class="relative z-10 opacity-0 animate-fade-in">
            <span
              class="inline-block px-4 py-2 mb-8 text-sm font-semibold rounded-full shadow-lg text-lime-400 bg-lime-400/10 shadow-lime-400/10"
            >
              Nouvelle Génération POS
            </span>
            <h1
              class="mb-8 text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl animate-slide-up [text-shadow:_0_2px_15px_rgb(0_0_0_/_50%)]"
            >
              Transformez la gestion de votre
              <span
                class="text-orange-500 [text-shadow:_0_2px_10px_rgb(249_115_22_/_30%)]"
                >commerce</span
              >
            </h1>
            <div class="mb-10 space-y-6">
              <p
                class="text-xl leading-relaxed tracking-wide text-gray-100 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] opacity-0 animate-fade-in-delay-1"
              >
                Découvrez un système de point de vente intelligent et rapide,
                conçu pour simplifier votre quotidien.
              </p>
              <p
                class="text-xl leading-relaxed tracking-wide text-gray-100 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] opacity-0 animate-fade-in-delay-2"
              >
                Boostez vos performances avec une interface intuitive et des
                outils innovants.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-6">
              <a
                href="#demo"
                class="relative px-10 py-5 overflow-hidden font-bold tracking-wider transition-all duration-300 rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 opacity-0 animate-fade-in-delay-3"
              >
                <span class="relative z-10">DÉCOUVRIR LA DÉMO</span>
                <div
                  class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
                ></div>
              </a>
              <NuxtLink
                to="/contact"
                class="px-10 py-5 font-bold tracking-wider text-orange-500 transition-all duration-300 border-2 rounded-lg border-orange-500/50 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5 opacity-0 animate-fade-in-delay-3"
              >
                DEMANDER UN DEVIS
              </NuxtLink>
            </div>
          </div>

          <!-- Cards flottantes avec ombres et profondeur améliorées -->
          <div class="relative">
            <div class="grid gap-6">
              <!-- Card Stats -->
              <div
                class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 animate-float group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="flex items-center justify-center rounded-lg aspect-square w-14 h-14 bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                  >
                    <font-awesome
                      icon="cash-register"
                      class="text-3xl text-orange-500 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-bold text-white">
                      Solution Complète
                    </h3>
                    <p class="text-gray-400">
                      Gestion des commandes, stocks, et personnel en un seul
                      outil intuitif
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card Beta -->
              <div
                class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 animate-float-delay group"
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
                      <h3 class="text-xl font-bold text-white">
                        Programme Beta
                      </h3>
                      <span
                        class="px-2 py-0.5 text-xs font-semibold rounded-full text-lime-400 bg-lime-400/10"
                        >NOUVEAU</span
                      >
                    </div>
                    <p class="text-gray-400">
                      Accès anticipé et tarifs préférentiels pour les early
                      adopters
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card Made in Belgium -->
              <div
                class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 animate-float group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="flex items-center justify-center rounded-lg aspect-square w-14 h-14 bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                  >
                    <font-awesome
                      icon="shield-alt"
                      class="text-3xl text-orange-500 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <h3 class="text-xl font-bold text-white">
                        Made in Belgium
                      </h3>
                      <NuxtImg
                        src="/images/belgium-flag.svg"
                        alt="Drapeau belge"
                        class="w-5 h-5"
                      />
                    </div>
                    <p class="text-gray-400">
                      Solution développée en Belgique avec support local 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <client-only>
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
              class="p-8 transition-all duration-300 transform opacity-0 group bg-slate-900/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1"
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
    </client-only>

    <!-- Section FAQ -->
    <client-only>
      <section
        class="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900"
        v-intersect:once="{
          handler: onFaqsIntersect,
          options: { threshold: 0.1, rootMargin: '50px 0px' },
        }"
      >
        <div class="px-[5%]">
          <div class="mb-16 text-center">
            <span
              class="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full text-lime-400 bg-lime-400/10"
            >
              FAQ
            </span>
            <h2 class="mb-6 text-4xl font-bold text-white">
              Questions Fréquentes
            </h2>
          </div>

          <div class="max-w-3xl mx-auto space-y-6">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="transition-all duration-300 transform opacity-0 bg-slate-900/50 backdrop-blur rounded-xl hover:bg-slate-700/50"
              :class="{ 'animate-fade-in-up': faqsVisible }"
              :style="{
                'animation-delay': faqsVisible ? `${index * 200}ms` : '0ms',
              }"
              @click="toggleFaq(index)"
            >
              <div class="flex items-center justify-between p-6 cursor-pointer">
                <h3 class="text-xl font-bold text-white">{{ faq.question }}</h3>
                <font-awesome
                  :icon="activeFaq === index ? 'chevron-up' : 'chevron-down'"
                  class="text-orange-500 transition-transform duration-300"
                  :class="{ 'rotate-180': activeFaq === index }"
                />
              </div>
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="max-h-[500px] opacity-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="max-h-[500px] opacity-100"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-show="activeFaq === index"
                  class="px-6 pb-6 overflow-hidden"
                >
                  <p class="text-gray-400">{{ faq.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </client-only>

    <!-- Section Témoignages -->
    <client-only>
      <section
        class="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800"
        v-intersect:once="{
          handler: onTestimonialsIntersect,
          options: { threshold: 0.1, rootMargin: '50px 0px' },
        }"
      >
        <div class="px-[5%]">
          <div class="mb-16 text-center">
            <span
              class="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-500 rounded-full bg-orange-500/10"
            >
              Témoignages
            </span>
            <h2 class="mb-6 text-4xl font-bold text-white">
              Ce qu'en pensent nos testeurs
            </h2>
          </div>

          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="p-8 transition-all opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl hover:bg-slate-700/50"
              :class="{ 'animate-fade-in-up': testimonialsVisible }"
              :style="{
                'animation-delay': testimonialsVisible
                  ? `${index * 200}ms`
                  : '0ms',
              }"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-16 h-16 overflow-hidden rounded-full bg-slate-700"
                >
                  <div
                    class="flex items-center justify-center w-full h-full text-2xl font-bold text-orange-500"
                  >
                    {{ testimonial.name.charAt(0) }}
                  </div>
                </div>
                <div>
                  <h3 class="font-bold text-white">{{ testimonial.name }}</h3>
                  <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
                </div>
              </div>
              <p class="text-gray-400">{{ testimonial.text }}</p>
              <div class="flex gap-1 mt-4">
                <font-awesome
                  v-for="star in 5"
                  :key="star"
                  icon="star"
                  class="text-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "default",
});

const featuresVisible = ref(false);
const faqsVisible = ref(false);
const testimonialsVisible = ref(false);
const activeFaq = ref(null);

// Fallback pour mobile
onMounted(() => {
  // Déclenche les animations après un délai si elles ne sont pas déjà visibles
  setTimeout(() => {
    if (!featuresVisible.value) featuresVisible.value = true;
    setTimeout(() => {
      if (!faqsVisible.value) faqsVisible.value = true;
      setTimeout(() => {
        if (!testimonialsVisible.value) testimonialsVisible.value = true;
      }, 600);
    }, 400);
  }, 1000);
});

// Listes de données
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

const faqs = [
  {
    question: "Comment fonctionne le programme beta ?",
    answer:
      "Notre programme beta vous donne un accès anticipé à notre solution avec un accompagnement personnalisé et des tarifs préférentiels. Vous participez activement à l'évolution du produit.",
  },
  {
    question: "Quels sont les prérequis techniques ?",
    answer:
      "Notre solution est accessible via le cloud et fonctionne sur tous les appareils modernes (PC, tablettes, smartphones). Une connexion internet stable est recommandée.",
  },
  {
    question: "Quel est le tarif ?",
    answer:
      "Pendant la phase beta, nous proposons des tarifs spéciaux aux early adopters. Contactez-nous pour obtenir une offre personnalisée adaptée à votre établissement.",
  },
];

const testimonials = [
  {
    name: "Thomas D.",
    role: "Gérant de Bar",
    text: "J'ai été bluffé par la simplicité d'utilisation. L'interface est vraiment intuitive et mes serveurs l'ont adoptée immédiatement.",
  },
  {
    name: "Marie L.",
    role: "Restauratrice",
    text: "Le support est très réactif et à l'écoute. Ils prennent en compte nos retours pour améliorer le produit. C'est vraiment appréciable.",
  },
  {
    name: "Laurent M.",
    role: "Chef de cuisine",
    text: "La gestion des stocks en temps réel m'aide énormément au quotidien. Je recommande vivement !",
  },
];

// Handlers
const onFeaturesIntersect = (entries) => {
  if (entries[0].isIntersecting) {
    featuresVisible.value = true;
  }
};

const onFaqsIntersect = (entries) => {
  if (entries[0].isIntersecting) {
    faqsVisible.value = true;
  }
};

const onTestimonialsIntersect = (entries) => {
  if (entries[0].isIntersecting) {
    testimonialsVisible.value = true;
  }
};

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

useHead({
  title: "HorecaFlow - La Nouvelle Solution POS pour Bar et Restaurant",
  meta: [
    {
      name: "description",
      content:
        "Startup innovante proposant une solution moderne de gestion pour bars et restaurants. Interface intuitive, fonctionnalités avancées et accompagnement personnalisé.",
    },
    {
      name: "keywords",
      content:
        "logiciel caisse bar, logiciel restaurant, système POS, gestion bar restaurant, caisse enregistreuse tactile, gestion stocks bar, analyse restaurant, facturation bar restaurant",
    },
    {
      property: "og:title",
      content: "HorecaFlow - Logiciel de Caisse pour Bar et Restaurant",
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
