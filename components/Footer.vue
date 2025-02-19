<template>
  <footer class="pt-16 pb-8 bg-gradient-to-b from-slate-900 to-slate-700">
    <!-- Section supérieure -->
    <div class="container px-6 mx-auto">
      <!-- Logo et description -->
      <div class="flex flex-col justify-between gap-12 mb-16 md:flex-row">
        <div class="max-w-md">
          <div class="flex items-center gap-3 mb-6">
            <font-awesome
              icon="glass-martini-alt"
              class="text-3xl text-orange-500"
            />
            <h3 class="text-2xl font-bold text-gray-50">BarManager</h3>
          </div>
          <p class="mb-6 text-gray-400">
            Révolutionnez la gestion de votre établissement avec notre solution
            POS tout-en-un. Support 24/7 et mises à jour régulières incluses.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-orange-500"
            >
              <font-awesome :icon="['fab', 'linkedin']" class="text-2xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-orange-500"
            >
              <font-awesome :icon="['fab', 'twitter']" class="text-2xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-orange-500"
            >
              <font-awesome :icon="['fab', 'facebook']" class="text-2xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-orange-500"
            >
              <font-awesome :icon="['fab', 'instagram']" class="text-2xl" />
            </a>
          </div>
        </div>

        <!-- Navigation rapide -->
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h4 class="mb-4 font-bold text-gray-50">Navigation</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="chevron-right" class="text-xs" />
                  Accueil
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="chevron-right" class="text-xs" />
                  À propos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="chevron-right" class="text-xs" />
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 font-bold text-gray-50">Services</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="chevron-right" class="text-xs" />
                  Formation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="chevron-right" class="text-xs" />
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="chevron-right" class="text-xs" />
                  API
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 md:col-span-1">
            <h4 class="mb-4 font-bold text-gray-50">Contact</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="mailto:techybear404@gmail.com"
                  class="flex items-center gap-3 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="envelope" class="text-orange-500" />
                  <span>techybear404@gmail.com</span>
                </a>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <font-awesome icon="phone" class="text-orange-500" />
                <span>+33 (0)6 XX XX XX XX</span>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <font-awesome icon="clock" class="text-orange-500" />
                <span>Support 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="pt-8 pb-12 border-t border-slate-800">
        <div class="max-w-xl mx-auto text-center">
          <h4 class="mb-4 font-bold text-gray-50">Restez informé</h4>
          <p class="mb-6 text-gray-400">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités et
            offres spéciales
          </p>
          <form class="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              class="flex-1 px-4 py-2 border rounded text-gray-50 bg-slate-900 border-slate-700 focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              class="bg-orange-500 text-gray-50 px-6 py-2 rounded font-medium hover:-translate-y-0.5 transition-transform duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 text-center border-t border-slate-800">
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
