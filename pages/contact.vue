<template>
  <!-- Hero Section avec animations -->
  <div class="relative min-h-screen overflow-hidden bg-slate-900">
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

    <!-- Éléments décoratifs avec animations -->
    <div
      class="absolute rounded-full w-96 h-96 bg-orange-500/10 blur-3xl -top-48 -right-48 animate-pulse"
    ></div>
    <div
      class="absolute rounded-full w-96 h-96 bg-lime-400/10 blur-3xl -bottom-48 -left-48 animate-pulse"
    ></div>

    <div class="relative px-[5%] pt-32 pb-20">
      <div class="mb-12 text-center">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-500 rounded-full md:opacity-0 bg-orange-500/10 animate-fade-in"
        >
          Early Access
        </span>
        <h1
          class="mb-4 text-4xl font-bold text-white lg:text-5xl animate-slide-up"
        >
          Rejoignez l'aventure
        </h1>
        <p
          class="max-w-2xl mx-auto text-gray-400 md:opacity-0 animate-fade-in-delay-1"
        >
          Participez au programme beta et bénéficiez d'avantages exclusifs.
          Soyez parmi les premiers à façonner l'avenir de la gestion
          d'établissement.
        </p>
      </div>

      <div class="grid max-w-5xl gap-12 mx-auto md:grid-cols-2">
        <!-- Infos de contact avec animations -->
        <client-only>
          <div
            class="space-y-8"
            v-intersect:once="{
              handler: onContactInfoIntersect,
              options: { threshold: 0.1, rootMargin: '50px 0px' },
            }"
          >
            <div
              class="p-8 md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl"
              :class="{ 'animate-fade-in-up': contactInfoVisible }"
            >
              <h2 class="mb-6 text-2xl font-bold text-orange-500">
                Pourquoi nous rejoindre ?
              </h2>
              <div class="space-y-6">
                <div
                  class="p-4 transition-all duration-300 rounded-xl hover:bg-slate-700/50 group"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex items-center justify-center w-12 h-12 rounded-lg aspect-square bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                    >
                      <font-awesome
                        icon="star"
                        class="text-orange-500 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p class="font-medium text-gray-50">Accès Prioritaire</p>
                      <p class="text-gray-400">
                        Soyez les premiers à tester les nouvelles
                        fonctionnalités
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="p-4 transition-all duration-300 rounded-xl hover:bg-slate-700/50 group"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex items-center justify-center w-12 h-12 rounded-lg aspect-square bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                    >
                      <font-awesome
                        icon="rocket"
                        class="text-orange-500 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p class="font-medium text-gray-50">
                        Tarifs Préférentiels
                      </p>
                      <p class="text-gray-400">
                        Offres spéciales pour nos early adopters
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="p-4 transition-all duration-300 rounded-xl hover:bg-slate-700/50 group"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex items-center justify-center w-12 h-12 rounded-lg aspect-square bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                    >
                      <font-awesome
                        icon="users"
                        class="text-orange-500 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p class="font-medium text-gray-50">Co-création</p>
                      <p class="text-gray-400">
                        Participez activement au développement du produit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </client-only>

        <!-- Formulaire avec animations améliorées -->
        <client-only>
          <div
            v-intersect:once="{
              handler: onFormIntersect,
              options: { threshold: 0.1, rootMargin: '50px 0px' },
            }"
          >
            <form
              class="p-8 md:opacity-0 bg-slate-800/50 backdrop-blur rounded-2xl"
              :class="{ 'animate-fade-in-up': formVisible }"
              style="animation-delay: 200ms"
            >
              <div class="space-y-6">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-50"
                    >Nom de l'établissement</label
                  >
                  <input
                    type="text"
                    class="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-slate-900/50 text-gray-50 border-slate-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 hover:bg-slate-800/50"
                    placeholder="Le Petit Bistrot"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-50"
                    >Email professionnel</label
                  >
                  <input
                    type="email"
                    class="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-slate-900/50 text-gray-50 border-slate-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 hover:bg-slate-800/50"
                    placeholder="contact@monbar.be"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-50"
                    >Type d'établissement</label
                  >
                  <select
                    class="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-slate-900/50 text-gray-50 border-slate-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 hover:bg-slate-800/50"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="bar">Bar</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="bar-restaurant">Bar-Restaurant</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-50"
                    >Message</label
                  >
                  <textarea
                    rows="4"
                    class="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-slate-900/50 text-gray-50 border-slate-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 hover:bg-slate-800/50"
                    placeholder="Parlez-nous de votre établissement et de vos besoins..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg font-bold text-gray-50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5"
                >
                  <span class="relative z-10">Rejoindre le Programme Beta</span>
                  <div
                    class="absolute inset-0 w-full h-full transition-all duration-300 scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
                  ></div>
                </button>
              </div>
            </form>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDevice } from "~/composables/useDevice";
import { useParallax } from "~/composables/useParallax";

definePageMeta({
  layout: "default",
});

useParallax();

const { isMobile } = useDevice();

// Variables pour les animations au scroll
const contactInfoVisible = ref(false);
const formVisible = ref(false);

// Handlers pour les animations au scroll
const onContactInfoIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    contactInfoVisible.value = true;
  }
};

const onFormIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    formVisible.value = true;
  }
};

useHead({
  title: "Rejoignez HorecaFlow - Programme Beta Early Access",
  meta: [
    {
      name: "description",
      content:
        "Participez au programme beta de HorecaFlow et soyez parmi les premiers à découvrir notre solution innovante de gestion pour bars et restaurants.",
    },
    {
      name: "keywords",
      content:
        "beta HorecaFlow, early access, startup bar restaurant, innovation POS, programme beta",
    },
    {
      property: "og:title",
      content: "Rejoignez HorecaFlow - Programme Beta Early Access",
    },
    {
      property: "og:description",
      content:
        "Accès prioritaire, tarifs préférentiels et co-création de la solution. Rejoignez l'aventure HorecaFlow dès maintenant !",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
