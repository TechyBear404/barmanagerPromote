<template>
  <div>
    <client-only>
      <AboutHero />
      <AboutStats />
      <AboutFeatures />
      <AboutCta />
    </client-only>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "À Propos - HorecaFlow | Solution POS Innovante",
  meta: [
    {
      name: "description",
      content:
        "Découvrez l'histoire et les valeurs d'HorecaFlow, startup belge innovante dans la gestion de bars et restaurants. Une équipe passionnée à votre service.",
    },
    {
      name: "keywords",
      content:
        "à propos HorecaFlow, équipe HorecaFlow, startup belge, innovation bar restaurant, gestion établissement, valeurs entreprise",
    },
    {
      property: "og:title",
      content: "À Propos d'HorecaFlow - Innovation et Passion",
    },
    {
      property: "og:description",
      content:
        "Une équipe passionnée au service de votre établissement. Découvrez notre histoire et nos valeurs.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
