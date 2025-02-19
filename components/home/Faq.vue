<template>
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
        <h2 class="mb-6 text-4xl font-bold text-white">Questions Fréquentes</h2>
      </div>

      <div class="max-w-3xl mx-auto space-y-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="transition-all duration-300 transform md:opacity-0 bg-slate-900/50 backdrop-blur rounded-xl hover:bg-slate-700/50"
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
            enter-from-class="md:opacity-0 max-h-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="md:opacity-0 max-h-0"
          >
            <div v-show="activeFaq === index" class="px-6 pb-6 overflow-hidden">
              <p class="text-gray-400">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useDevice } from "~/composables/useDevice";

const { isMobile } = useDevice();
const faqsVisible = ref(false);
const activeFaq = ref(null);

const faqs = [
  {
    question: "Qu'est-ce que le programme beta ?",
    answer:
      "Notre programme beta vous permet de participer au développement de notre solution. En tant que beta testeur, vous aurez accès aux premières versions de l'application et pourrez influencer directement son développement avec vos retours.",
  },
  {
    question: "Quand sera disponible la version finale ?",
    answer:
      "Nous prévoyons de lancer la version finale au premier trimestre 2024. Les beta testeurs bénéficieront d'un accès prioritaire et de conditions préférentielles.",
  },
  {
    question: "Y a-t-il des frais pour participer à la beta ?",
    answer:
      "Non, la participation au programme beta est gratuite. Nous cherchons des établissements motivés pour tester notre solution et contribuer à son amélioration.",
  },
  {
    question: "Comment puis-je devenir beta testeur ?",
    answer:
      "Il suffit de nous contacter via le formulaire. Nous étudierons votre candidature et vous recontacterons pour discuter des détails et planifier votre intégration au programme.",
  },
];

const onFaqsIntersect = (entries) => {
  if (!isMobile.value && entries[0].isIntersecting) {
    faqsVisible.value = true;
  }
};

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>
