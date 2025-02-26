<template>
  <div
    class="min-h-screen bg-gradient-to-bl from-gray-950 to-gray-800 flex items-center justify-center p-4"
  >
    <!-- Card Container avec animation d'entrée -->
    <div
      class="max-w-2xl w-full bg-gray-800/50 backdrop-blur-sm p-10 rounded-xl transform transition-all duration-700 hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/30"
    >
      <!-- Logo avec animation de rotation au hover -->
      <div class="relative mb-10 flex justify-center w-max m-auto">
        <span class="absolute flex size-3 right-5 -top-2">
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
          class="w-32 transition-all duration-500 hover:rotate-[360deg] hover:scale-110 cursor-pointer"
          fill="white"
        >
          <path
            d="M792.6,183.69c-19.84-16.36-42.89-27.75-68.53-33.91-13.93-3.33-28.4-5.02-42.99-5.02-11.3,0-22.84,1.02-34.3,3.02l-23.09,4.04V0l-123.72,21.65c-25.6,4.48-50.44,13.74-73.83,27.5-22.99,13.55-43.52,30.85-61.03,51.43L113.45,396.36,0,529.66l388.7-68.01v203.45l203.34-239.03,407.96-71.4-207.4-170.98ZM552.18,356.4l-87.99,103.44v-88.04l-271.09,47.43,229.51-269.73c12.05-14.15,26.13-26.04,41.85-35.3,15.55-9.16,31.87-15.27,48.53-18.19l35.23-6.16v151.82l111.58-19.53c7.18-1.26,14.34-1.89,21.29-1.89,8.68,0,17.24.99,25.41,2.94,14.37,3.45,27.18,9.75,38.08,18.75l80.85,66.64-273.24,47.82Z"
          />
        </svg>
      </div>

      <!-- Titre avec animation de gradient -->
      <h1 class="relative mb-5 text-4xl sm:text-5xl text-center font-bold">
        <span
          class="bg-gradient-to-r from-blue-500 via-red-500 to-orange-500 text-transparent bg-clip-text bg-[length:200%] animate-gradient uppercase"
        >
          Site en construction
        </span>
      </h1>

      <!-- Countdown -->
      <div class="flex justify-center gap-4 my-8">
        <div
          v-for="(unit, index) in timeUnits"
          :key="index"
          class="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 transform hover:scale-105 transition-all duration-300 min-w-[90px]"
        >
          <span class="text-3xl font-bold text-blue-400">{{ unit.value }}</span>
          <span class="text-sm text-gray-400 mt-1">{{ unit.label }}</span>
        </div>
      </div>

      <!-- Séparateur avec animation -->
      <div class="relative">
        <div
          class="w-32 h-1 mx-auto bg-gray-800 rounded-full mb-12 before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-0 before:h-1 before:bg-orange-500 before:rounded-full before:transition-all before:duration-700 group-hover:before:w-32 group-hover:before:left-[calc(50%-4rem)]"
        ></div>
      </div>

      <!-- Texte avec animation de fade -->
      <p
        class="text-white/90 text-center text-lg sm:text-xl transform transition-all duration-500 hover:text-white"
      >
        Nous travaillons activement pour vous offrir une
        <span class="relative inline-block group cursor-pointer">
          <span class="text-blue-500">expérience exceptionnelle</span>
          <span
            class="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 transform rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </span>
      </p>

      <!-- Points de chargement animés -->
      <div class="flex justify-center gap-2 mt-8">
        <div
          class="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]"
        ></div>
        <div
          class="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]"
        ></div>
        <div class="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  timeUnits.value[2].value = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
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
