<template>
  <div>
    <client-only>
      <ContactHero />
      <ContactInfos />
      <ContactForm />
    </client-only>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "Contact - HorecaFlow | Solution POS pour Bar et Restaurant",
  meta: [
    {
      name: "description",
      content:
        "Contactez-nous pour en savoir plus sur notre solution POS innovante pour bars et restaurants. Participez au programme beta et bénéficiez d'avantages exclusifs.",
    },
    {
      name: "keywords",
      content:
        "contact HorecaFlow, demo POS, logiciel bar restaurant, programme beta, support HorecaFlow",
    },
    {
      property: "og:title",
      content: "Contact - HorecaFlow",
    },
    {
      property: "og:description",
      content:
        "Intéressé par notre solution ? Contactez-nous pour en savoir plus et rejoindre notre programme beta.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
