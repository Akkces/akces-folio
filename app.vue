<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-bl from-gray-950 to-gray-800 p-4"
  >
    <!-- Card Container avec animation d'entrée -->
    <div
      class="w-full max-w-2xl transform rounded-xl border border-gray-700/50 bg-gray-800/50 p-10 shadow-lg backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      <!-- Logo avec animation de rotation au hover -->
      <div class="relative m-auto mb-10 flex w-max justify-center">
        <span class="absolute -top-2 right-5 flex size-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex size-3 rounded-full bg-blue-500"
          ></span>
        </span>
        <svg
          id="aks-logo"
          viewBox="0 0 1000 665.1"
          class="w-32 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-[360deg]"
          fill="white"
        >
          <path
            d="M792.6,183.69c-19.84-16.36-42.89-27.75-68.53-33.91-13.93-3.33-28.4-5.02-42.99-5.02-11.3,0-22.84,1.02-34.3,3.02l-23.09,4.04V0l-123.72,21.65c-25.6,4.48-50.44,13.74-73.83,27.5-22.99,13.55-43.52,30.85-61.03,51.43L113.45,396.36,0,529.66l388.7-68.01v203.45l203.34-239.03,407.96-71.4-207.4-170.98ZM552.18,356.4l-87.99,103.44v-88.04l-271.09,47.43,229.51-269.73c12.05-14.15,26.13-26.04,41.85-35.3,15.55-9.16,31.87-15.27,48.53-18.19l35.23-6.16v151.82l111.58-19.53c7.18-1.26,14.34-1.89,21.29-1.89,8.68,0,17.24.99,25.41,2.94,14.37,3.45,27.18,9.75,38.08,18.75l80.85,66.64-273.24,47.82Z"
          />
        </svg>
      </div>

      <!-- Titre avec animation de gradient -->
      <h1 class="relative mb-5 text-center text-4xl font-bold sm:text-5xl">
        <span
          class="animate-gradient bg-gradient-to-r from-blue-500 via-red-500 to-orange-500 bg-[length:200%] bg-clip-text text-transparent uppercase"
        >
          Site en construction
        </span>
      </h1>

      <!-- Countdown -->
      <div class="my-8 flex justify-center gap-4">
        <div
          v-for="(unit, index) in timeUnits"
          :key="index"
          class="flex min-w-[90px] transform flex-col items-center rounded-lg border border-gray-700 bg-gray-900/50 p-4 transition-all duration-300 hover:scale-105"
        >
          <span class="text-3xl font-bold text-blue-400">{{ unit.value }}</span>
          <span class="mt-1 text-sm text-gray-400">{{ unit.label }}</span>
        </div>
      </div>

      <!-- Séparateur avec animation -->
      <div class="relative">
        <div
          class="mx-auto mb-12 h-1 w-32 rounded-full bg-gray-800 before:absolute before:top-0 before:left-1/2 before:h-1 before:w-0 before:rounded-full before:bg-orange-500 before:transition-all before:duration-700 before:content-[''] group-hover:before:left-[calc(50%-4rem)] group-hover:before:w-32"
        ></div>
      </div>

      <!-- Texte avec animation de fade -->
      <p
        class="transform text-center text-lg text-white/90 transition-all duration-500 hover:text-white sm:text-xl"
      >
        Nous travaillons activement pour vous offrir une
        <span class="group relative inline-block cursor-pointer">
          <span class="text-blue-500">expérience exceptionnelle</span>
          <span
            class="absolute -bottom-1 left-0 h-1 w-full scale-x-0 transform rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </span>
      </p>

      <!-- Points de chargement animés -->
      <div class="mt-8 flex justify-center gap-2">
        <div
          class="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.3s]"
        ></div>
        <div
          class="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.15s]"
        ></div>
        <div class="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Définir le titre de la page
useHead({
  title: "Maxime Liger - Bientôt Disponible",
  meta: [
    {
      name: "description",
      content:
        "Notre site est en cours de construction. Revenez bientôt pour découvrir notre nouvelle plateforme!",
    },
  ],
});

// Calculer la date cible (30 jours à partir de maintenant)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30);

const timeUnits = ref([
  { label: "JOURS", value: 0 },
  { label: "HEURES", value: 0 },
  { label: "MINUTES", value: 0 },
  { label: "SECONDES", value: 0 },
]);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  timeUnits.value[0].value = Math.floor(distance / (1000 * 60 * 60 * 24));
  timeUnits.value[1].value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  timeUnits.value[2].value = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60),
  );
  timeUnits.value[3].value = Math.floor((distance % (1000 * 60)) / 1000);
};

let interval;

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  animation: gradient 2s linear infinite alternate;
}
</style>
