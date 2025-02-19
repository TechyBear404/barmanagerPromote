<template>
  <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="px-[5%]">
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
          >
            <font-awesome :icon="stat.icon" class="text-3xl text-orange-500" />
          </div>
          <div class="mb-2 text-4xl font-bold text-white">
            <span class="tabular-nums">{{ stat.value }}</span>
            <span class="text-orange-500">{{ stat.symbol }}</span>
          </div>
          <p class="text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    value: "24",
    symbol: "/7",
    label: "Support prévu",
    icon: "headset",
  },
  {
    value: "10",
    symbol: "+",
    label: "Fonctionnalités clés",
    icon: "check",
  },
  {
    value: "0",
    symbol: "€",
    label: "Frais installation beta",
    icon: "rocket",
  },
  {
    value: "Q1",
    symbol: "24",
    label: "Lancement prévu",
    icon: "calendar-alt",
  },
];
</script>
