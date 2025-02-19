<template>
  <div class="min-h-screen flex flex-col bg-gray-900">
    <Nav />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
</script>

<style>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
