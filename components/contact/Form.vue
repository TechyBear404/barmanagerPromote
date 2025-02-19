<template>
  <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
    <div class="px-[5%]">
      <div class="max-w-4xl mx-auto">
        <form @submit.prevent="handleSubmit" class="grid gap-8">
          <!-- Nom & Prénom -->
          <div class="grid gap-8 sm:grid-cols-2">
            <div class="space-y-2">
              <label
                for="firstName"
                class="block text-sm font-semibold text-gray-300"
                >Prénom</label
              >
              <input
                type="text"
                id="firstName"
                v-model="form.firstName"
                required
                class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none placeholder:text-gray-500"
                placeholder="Jean"
              />
            </div>
            <div class="space-y-2">
              <label
                for="lastName"
                class="block text-sm font-semibold text-gray-300"
                >Nom</label
              >
              <input
                type="text"
                id="lastName"
                v-model="form.lastName"
                required
                class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none placeholder:text-gray-500"
                placeholder="Dupont"
              />
            </div>
          </div>

          <!-- Email & Téléphone -->
          <div class="grid gap-8 sm:grid-cols-2">
            <div class="space-y-2">
              <label
                for="email"
                class="block text-sm font-semibold text-gray-300"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none placeholder:text-gray-500"
                placeholder="jean.dupont@example.com"
              />
            </div>
            <div class="space-y-2">
              <label
                for="phone"
                class="block text-sm font-semibold text-gray-300"
                >Téléphone</label
              >
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none placeholder:text-gray-500"
                placeholder="+32 123 45 67 89"
              />
            </div>
          </div>

          <!-- Établissement & Type -->
          <div class="grid gap-8 sm:grid-cols-2">
            <div class="space-y-2">
              <label
                for="establishment"
                class="block text-sm font-semibold text-gray-300"
                >Nom de l'établissement</label
              >
              <input
                type="text"
                id="establishment"
                v-model="form.establishment"
                required
                class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none placeholder:text-gray-500"
                placeholder="Le Café du Coin"
              />
            </div>
            <div class="space-y-2">
              <label
                for="type"
                class="block text-sm font-semibold text-gray-300"
                >Type d'établissement</label
              >
              <select
                id="type"
                v-model="form.type"
                required
                class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              >
                <option value="" disabled selected class="bg-slate-800">
                  Sélectionnez
                </option>
                <option value="bar" class="bg-slate-800">Bar</option>
                <option value="restaurant" class="bg-slate-800">
                  Restaurant
                </option>
                <option value="cafe" class="bg-slate-800">Café</option>
                <option value="other" class="bg-slate-800">Autre</option>
              </select>
            </div>
          </div>

          <!-- Message -->
          <div class="space-y-2">
            <label
              for="message"
              class="block text-sm font-semibold text-gray-300"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-3 text-white border rounded-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none placeholder:text-gray-500"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <!-- Submit -->
          <div class="flex justify-center pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="relative px-10 py-5 overflow-hidden font-bold tracking-wider transition-all duration-300 rounded-lg group bg-gradient-to-r from-orange-500 to-orange-400 text-gray-50 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="relative z-10">
                <span v-if="isSubmitting" class="flex items-center gap-2">
                  <font-awesome icon="sync" class="animate-spin" />
                  ENVOI EN COURS...
                </span>
                <span v-else>ENVOYER LE MESSAGE</span>
              </span>
              <div
                class="absolute inset-0 w-full h-full transition-all scale-0 rounded-lg group-hover:scale-100 group-hover:bg-orange-600/20"
              ></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  establishment: "",
  type: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", form.value);

    // Reset form
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      establishment: "",
      type: "",
      message: "",
    };

    alert("Message envoyé avec succès !");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Une erreur est survenue. Veuillez réessayer.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
