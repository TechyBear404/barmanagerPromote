<template>
  <footer
    class="pb-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
  >
    <div class="container px-6 mx-auto">
      <!-- Newsletter avec design amélioré -->
      <div class="py-16 border-b border-slate-700">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-orange-500/20 to-lime-400/20"
          >
            <font-awesome
              icon="envelope-open-text"
              class="text-3xl text-orange-500"
            />
          </div>
          <h4 class="mb-4 text-2xl font-bold text-gray-50">
            Restez dans la boucle !
          </h4>
          <p class="mb-8 text-gray-400">
            Recevez en avant-première les dernières actualités, des conseils
            d'experts et un accès privilégié à notre beta.
            <span class="block mt-2 text-sm text-orange-500"
              >🎁 Les premiers inscrits bénéficient de 3 mois d'essai gratuit
              !</span
            >
          </p>
          <form class="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Votre email professionnel"
              class="flex-1 px-6 py-3 text-lg transition-all border rounded-lg bg-slate-900 text-gray-50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <button
              type="submit"
              class="px-8 py-3 text-lg font-medium transition-all rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5"
            >
              Je m'inscris !
            </button>
          </form>
        </div>
      </div>
      <div class="grid gap-16 my-8 md:grid-cols-7">
        <!-- Logo et description -->
        <div class="md:col-span-3">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
            >
              <font-awesome
                icon="glass-martini-alt"
                class="text-3xl text-orange-500"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-50">HorecaFlow</h3>
              <span class="text-sm font-medium text-orange-500"
                >Beta Program</span
              >
            </div>
          </div>
          <p class="mb-6 text-gray-400">
            Startup innovante développant la prochaine génération de solutions
            POS pour bars et restaurants. Rejoignez le programme beta et
            façonnez l'avenir de la gestion d'établissement.
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
        <div class="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-4">
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

          <!-- Documentation -->
          <div>
            <h4 class="mb-4 font-bold text-gray-50">Documentation</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="book" class="text-xs" />
                  Guide d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="graduation-cap" class="text-xs" />
                  Tutoriels
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  class="flex items-center gap-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="question-circle" class="text-xs" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact avec badge beta -->
          <div>
            <h4 class="mb-4 font-bold text-gray-50">Contact</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="mailto:contact@horecaflow.com"
                  class="flex items-center gap-3 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <font-awesome icon="envelope" class="text-orange-500" />
                  <span>contact@horecaflow.com</span>
                </a>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <font-awesome icon="phone" class="text-orange-500" />
                <span>+32 XXX XX XX XX</span>
              </li>
              <li class="flex items-center gap-3">
                <font-awesome icon="rocket" class="text-orange-500" />
                <div>
                  <span class="text-gray-400">Programme Beta</span>
                  <span
                    class="px-2 py-0.5 ml-2 text-xs font-semibold rounded-full text-lime-400 bg-lime-400/10"
                    >ACCÈS ANTICIPÉ</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright avec lien vers la doc -->
      <div class="pt-8 text-center border-t border-slate-800">
        <p class="mb-4 text-gray-500">
          © {{ new Date().getFullYear() }} HorecaFlow. Tous droits réservés.
        </p>
        <div class="flex justify-center gap-4 text-sm text-gray-500">
          <a href="#" class="hover:text-orange-500">Mentions légales</a>
          <span>•</span>
          <a href="#" class="hover:text-orange-500"
            >Politique de confidentialité</a
          >
          <span>•</span>
          <a href="#" class="hover:text-orange-500">Documentation</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic needed
</script>
