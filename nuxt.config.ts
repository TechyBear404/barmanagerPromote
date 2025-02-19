// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome"],
  fontawesome: {
    icons: {
      solid: [
        "check",
        "star",
        "envelope",
        "phone",
        "clock",
        "chevron-right",
        "glass-martini-alt",
        "cash-register",
        "chart-line",
        "box",
        "users",
        "receipt",
        "mobile-alt",
        "glass-cheers",
        "table",
        "credit-card",
      ],
      brands: ["linkedin", "twitter", "facebook", "instagram", "github"],
    },
  },
});
