// https://nuxt.com/docs/api/configuration/nuxt-config
/** @type {import("nuxt/config").DefineNuxtConfig} */
export default defineNuxtConfig({
  srcDir: "src",
  serverDir: "src/server",
  devtools: { enabled: true },
  experimental: {
    typescriptBundlerResolution: true,
    typedPages: true,
  },
  css: ["@/styles/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-preset-env": {
        stage: 3,
      },
      cssnano: {},
    },
  },
  app: {
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
