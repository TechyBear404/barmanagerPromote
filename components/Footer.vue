<template>
  <footer class="pt-16 pb-8 bg-gradient-to-b from-gray-900 to-gray-950">
    <!-- Section supérieure -->
    <div class="container px-6 mx-auto">
      <!-- Logo et description -->
      <div class="flex flex-col justify-between gap-12 mb-16 md:flex-row">
        <div class="max-w-md">
          <div class="flex items-center gap-3 mb-6">
            <i class="text-3xl fas fa-glass-martini-alt text-emerald-400"></i>
            <h3 class="text-2xl font-bold text-white">BarManager</h3>
          </div>
          <p class="mb-6 text-gray-400">
            Révolutionnez la gestion de votre établissement avec notre solution
            POS tout-en-un. Support 24/7 et mises à jour régulières incluses.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-emerald-400"
            >
              <i class="text-2xl fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-emerald-400"
            >
              <i class="text-2xl fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-emerald-400"
            >
              <i class="text-2xl fab fa-facebook"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-emerald-400"
            >
              <i class="text-2xl fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Navigation rapide -->
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h4 class="mb-4 font-bold text-white">Navigation</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="text-xs fas fa-chevron-right"></i>
                  Accueil
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="text-xs fas fa-chevron-right"></i>
                  À propos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="text-xs fas fa-chevron-right"></i>
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 font-bold text-white">Services</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="text-xs fas fa-chevron-right"></i>
                  Formation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="text-xs fas fa-chevron-right"></i>
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="text-xs fas fa-chevron-right"></i>
                  API
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 md:col-span-1">
            <h4 class="mb-4 font-bold text-white">Contact</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="mailto:techybear404@gmail.com"
                  class="flex items-center gap-3 text-gray-400 transition-colors hover:text-emerald-400"
                >
                  <i class="fas fa-envelope text-emerald-400"></i>
                  <span>techybear404@gmail.com</span>
                </a>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <i class="fas fa-phone text-emerald-400"></i>
                <span>+33 (0)6 XX XX XX XX</span>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <i class="fas fa-clock text-emerald-400"></i>
                <span>Support 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="pt-8 pb-12 border-t border-gray-800">
        <div class="max-w-xl mx-auto text-center">
          <h4 class="mb-4 font-bold text-white">Restez informé</h4>
          <p class="mb-6 text-gray-400">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités et
            offres spéciales
          </p>
          <form class="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              class="flex-1 px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              class="bg-emerald-400 text-gray-900 px-6 py-2 rounded font-medium hover:-translate-y-0.5 transition-transform duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 text-center border-t border-gray-800">
        <p class="text-gray-500">
          © {{ new Date().getFullYear() }} BarManager. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic for now, so the script remains empty
</script>
