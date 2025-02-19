<template>
  <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="px-[5%]">
      <div class="grid max-w-4xl gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        <!-- Email -->
        <div
          class="p-6 text-center transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
        >
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
          >
            <font-awesome icon="envelope" class="text-3xl text-orange-500" />
          </div>
          <h3 class="mb-2 text-xl font-bold text-white">Email</h3>
          <a
            href="mailto:contact@horecaflow.be"
            class="text-gray-400 transition-colors hover:text-orange-500"
          >
            contact@horecaflow.be
          </a>
        </div>

        <!-- Téléphone -->
        <div
          class="p-6 text-center transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
        >
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
          >
            <font-awesome icon="phone" class="text-3xl text-orange-500" />
          </div>
          <h3 class="mb-2 text-xl font-bold text-white">Téléphone</h3>
          <a
            href="tel:+32000000000"
            class="text-gray-400 transition-colors hover:text-orange-500"
          >
            +32 (0)0 00 00 00 00
          </a>
        </div>

        <!-- Horaires -->
        <div
          class="p-6 text-center transition-all duration-300 transform bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
        >
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-lime-400/20"
          >
            <font-awesome icon="clock" class="text-3xl text-orange-500" />
          </div>
          <h3 class="mb-2 text-xl font-bold text-white">Horaires</h3>
          <p class="text-gray-400">
            Lun. - Ven.: 9h - 18h<br />
            Sam. - Dim.: Sur RDV
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
