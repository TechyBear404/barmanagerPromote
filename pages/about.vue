<template>
  <div class="bg-slate-900">
    <!-- Hero section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-slate-900">
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
      <!-- Éléments décoratifs -->
      <div
        class="absolute rounded-full w-96 h-96 bg-orange-500/10 blur-3xl -top-48 -right-48 animate-pulse"
      ></div>
      <div
        class="absolute rounded-full w-96 h-96 bg-lime-400/10 blur-3xl -bottom-48 -left-48 animate-pulse"
      ></div>

      <div class="relative px-[5%]">
        <span
          class="inline-block px-4 py-2 mb-6 text-sm font-semibold text-orange-500 rounded-full md:opacity-0 bg-orange-500/10 animate-fade-in"
        >
          Notre Histoire
        </span>
        <h1
          class="mb-8 text-4xl font-bold text-center text-gray-50 md:text-5xl lg:text-6xl animate-slide-up"
        >
          Une nouvelle vision de la gestion d'<span class="text-orange-500"
            >établissement</span
          >
        </h1>
        <p
          class="max-w-3xl mx-auto text-xl leading-relaxed text-center text-gray-400 md:opacity-0 animate-fade-in-delay-1"
        >
          Née de la passion pour l'innovation et de l'expérience du terrain,
          HorecaFlow réinvente la gestion des bars et restaurants pour l'ère
          numérique.
        </p>
      </div>
    </section>

    <!-- Stats section -->
    <client-only>
      <section
        class="py-20"
        v-intersect:once="{
          handler: onStatsIntersect,
          options: { threshold: 0.1, rootMargin: '50px 0px' },
        }"
      >
        <div class="px-[5%]">
          <h2 class="mb-12 text-3xl font-bold text-center text-gray-50">
            <span class="text-orange-500">HorecaFlow</span> en chiffres
          </h2>
          <div class="grid gap-8 md:grid-cols-3">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="p-8 text-center transition-all duration-300 transform md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl group hover:bg-slate-700/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
              :class="{ 'animate-fade-in-up': statsVisible }"
              :style="{
                'animation-delay': statsVisible ? `${index * 200}ms` : '0ms',
              }"
            >
              <div
                class="flex items-center justify-center w-16 h-16 mx-auto mb-6 transition-transform duration-300 transform aspect-square rounded-xl bg-gradient-to-br from-orange-500/20 to-lime-400/20 group-hover:scale-110"
              >
                <font-awesome
                  :icon="stat.icon"
                  class="text-3xl text-orange-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
              <h3
                class="mb-2 text-4xl font-bold text-orange-500 transition-colors duration-300 group-hover:text-orange-400"
              >
                {{ stat.value }}
              </h3>
              <p
                class="text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
              >
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </client-only>

    <!-- Features section -->
    <client-only>
      <section
        class="py-20"
        v-intersect:once="{
          handler: onFeaturesIntersect,
          options: { threshold: 0.1, rootMargin: '50px 0px' },
        }"
      >
        <div class="px-[5%]">
          <h2 class="mb-12 text-3xl font-bold text-center text-gray-50">
            Nos <span class="text-orange-500">atouts</span>
          </h2>
          <TransitionGroup
            name="feature-list"
            tag="div"
            class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="(feature, index) in features"
              :key="feature.title"
              class="p-6 transition-all duration-300 transform md:opacity-0 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 group"
              :class="{ 'animate-fade-in-up': featuresVisible }"
              :style="{
                'animation-delay': featuresVisible ? `${index * 100}ms` : '0ms',
              }"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-lg aspect-square bg-gradient-to-br from-orange-500/20 to-lime-400/20 group-hover:scale-110"
                >
                  <font-awesome
                    :icon="feature.icon"
                    class="text-2xl text-orange-500 transition-all duration-300 group-hover:rotate-12"
                  />
                </div>
                <h3
                  class="text-xl font-bold transition-colors duration-300 text-gray-50 group-hover:text-orange-500"
                >
                  {{ feature.title }}
                </h3>
              </div>
              <p
                class="mt-4 text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
              >
                {{ feature.description }}
              </p>
            </div>
          </TransitionGroup>
        </div>
      </section>
    </client-only>

    <!-- CTA Section -->
    <client-only>
      <section
        class="py-20"
        v-intersect:once="{
          handler: onCtaIntersect,
          options: { threshold: 0.1, rootMargin: '50px 0px' },
        }"
      >
        <div class="px-[5%]">
          <div
            class="relative p-8 overflow-hidden text-center md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl md:p-16"
            :class="{ 'animate-fade-in-up': ctaVisible }"
          >
            <div
              class="absolute rounded-full w-96 h-96 bg-orange-500/10 blur-3xl -top-48 -right-48"
            ></div>
            <div
              class="absolute rounded-full w-96 h-96 bg-lime-400/10 blur-3xl -bottom-48 -left-48"
            ></div>

            <div class="relative">
              <h2 class="mb-6 text-3xl font-bold text-gray-50 md:text-4xl">
                Prêt à révolutionner votre gestion ?
              </h2>
              <p class="max-w-2xl mx-auto mb-8 text-gray-400">
                Rejoignez les centaines d'établissements qui nous font déjà
                confiance
              </p>
              <NuxtLink
                to="/contact"
                class="relative inline-block px-8 py-4 overflow-hidden font-bold transition-all rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-xl hover:shadow-orange-500/20"
              >
                <span class="relative z-10">Démarrer Maintenant</span>
                <div
                  class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
                ></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDevice } from "~/composables/useDevice";

definePageMeta({
  layout: "default",
});

const { isMobile } = useDevice();

// Variables pour les animations au scroll
const statsVisible = ref(false);
const featuresVisible = ref(false);
const ctaVisible = ref(false);

// Données pour les statistiques
const stats = [
  {
    value: "2024",
    label: "Année de Lancement",
    icon: "chart-line",
  },
  {
    value: "Beta",
    label: "Programme Early Access",
    icon: "star",
  },
  {
    value: "24/7",
    label: "Support Dédié",
    icon: "clock",
  },
];

// Données pour les fonctionnalités
const features = [
  {
    title: "Interface Intuitive",
    description:
      "Design moderne et ergonomique pour une prise en main rapide par vos équipes.",
    icon: "check",
  },
  {
    title: "Sécurité Maximale",
    description:
      "Protection des données et sauvegardes automatiques pour votre tranquillité.",
    icon: "shield-alt",
  },
  {
    title: "Mises à jour régulières",
    description:
      "Nouvelles fonctionnalités et améliorations continues pour rester à la pointe.",
    icon: "sync",
  },
  {
    title: "Formation Incluse",
    description: "Programme complet de formation pour vous et vos équipes.",
    icon: "graduation-cap",
  },
  {
    title: "Support Expert",
    description:
      "Une équipe dédiée disponible 24/7 pour répondre à vos questions.",
    icon: "headset",
  },
  {
    title: "Performance",
    description: "Solution optimisée pour une rapidité d'exécution maximale.",
    icon: "rocket",
  },
];

// Handlers pour les animations au scroll
const onStatsIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    statsVisible.value = true;
  }
};

const onFeaturesIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    featuresVisible.value = true;
  }
};

const onCtaIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    ctaVisible.value = true;
  }
};

useHead({
  title:
    "À Propos de HorecaFlow - La Startup qui Révolutionne la Gestion Bar Restaurant",
  meta: [
    {
      name: "description",
      content:
        "Découvrez HorecaFlow, la startup française qui réinvente la gestion des bars et restaurants. Solution innovante en phase beta, rejoignez l'aventure !",
    },
    {
      name: "keywords",
      content:
        "startup bar restaurant, innovation POS, nouvelle solution gestion bar, système caisse innovant, startup française",
    },
    {
      property: "og:title",
      content:
        "À Propos de HorecaFlow - La Startup qui Révolutionne la Gestion Bar Restaurant",
    },
    {
      property: "og:description",
      content:
        "Startup française innovante développant la prochaine génération de solutions pour bars et restaurants.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
