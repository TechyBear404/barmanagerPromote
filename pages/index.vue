<template>
  <div>
    <client-only>
      <HomeHero />
      <HomeFonctionalities />
      <HomeFaq />
      <HomeReviews />
    </client-only>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

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
