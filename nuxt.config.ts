import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  svgo: { autoImportPath: "~/assets/svg/" },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  ssr: true,
  nitro: {
    preset: "vercel",
  },

  modules: ["nuxt-svgo"],
});
