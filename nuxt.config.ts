// https://nuxt.com/docs/api/configuration/nuxt-config
/** @type {import("nuxt/config").DefineNuxtConfig} */
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  css: ["@/styles/global.css"],
  postcss: {
    // @ts-ignore-next-line
    plugins: {
      tailwindcss: {
        config: "./tailwind.config.cjs",
      },
      autoprefixer: {},
      "postcss-import": {},
      "postcss-preset-env": {
        stage: 3,
      },
      cssnano: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vueuse/motion/nuxt"],
  colorMode: {
    classSuffix: "",
  },
  hooks: {
    "components:dirs": (dirs) => {
      dirs.unshift({
        path: "@/components/ui",
        // this is required else Nuxt will autoImport `.ts` file
        extensions: [".vue"],
        // prefix for your components, eg: UiButton
        // prefix: "Ui",
        // prevent adding another prefix component by it's path.
        pathPrefix: false,
      });
    },
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {},
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "prefetch",
          href: "/fonts/Geist/GeistVariableVF.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "prefetch",
          href: "/fonts/Geist-Mono/GeistMonoVariableVF.woff2",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
