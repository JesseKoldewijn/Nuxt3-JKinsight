// https://nuxt.com/docs/api/configuration/nuxt-config
/** @type {import("nuxt/config").DefineNuxtConfig} */
export default defineNuxtConfig({
  srcDir: "src",
  serverDir: "src/server",
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  css: ["@/styles/global.scss"],
  postcss: {
    // @ts-ignore-next-line
    parser: "postcss-scss",
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      "postcss-preset-env": {
        stage: 3,
      },
      autoprefixer: {},
      cssnano: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
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
