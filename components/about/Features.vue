<template>
  <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
    <div class="px-[5%]">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <div class="order-2 lg:order-1">
          <div class="grid gap-8">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="p-6 transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-lg aspect-square w-14 h-14 bg-gradient-to-br from-orange-500/20 to-lime-400/20"
                >
                  <font-awesome
                    :icon="feature.icon"
                    class="text-3xl text-orange-500"
                  />
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-bold text-white">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-400">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 text-center lg:order-2 lg:text-left">
          <span
            class="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full text-orange-500 bg-orange-500/10"
          >
            Nos Valeurs
          </span>
          <h2 class="mb-6 text-4xl font-bold text-white">
            Une équipe passionnée à votre service
          </h2>
          <p class="mb-8 text-xl text-gray-400">
            Nous mettons notre expertise au service de votre réussite avec un
            accompagnement personnalisé et une solution évolutive.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "heart",
    title: "Passion & Engagement",
    description:
      "Une équipe dédiée qui comprend vos besoins et s'investit pleinement dans votre réussite.",
  },
  {
    icon: "comments",
    title: "Proximité & Écoute",
    description:
      "Un accompagnement personnalisé et une oreille attentive pour faire évoluer notre solution selon vos retours.",
  },
  {
    icon: "shield-alt",
    title: "Fiabilité & Sécurité",
    description:
      "Des standards de qualité élevés et une protection optimale de vos données.",
  },
  {
    icon: "lightbulb",
    title: "Innovation & Adaptation",
    description:
      "Une solution qui évolue constamment pour répondre aux nouveaux défis du secteur.",
  },
];
</script>
