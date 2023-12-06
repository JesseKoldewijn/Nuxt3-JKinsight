<template>
  <nav
    class="fixed inset-x-0 top-0 z-40 flex bg-background bg-opacity-80 px-6 py-4 transition-colors duration-500"
  >
    <div class="relative inset-0 flex w-full">
      <div
        class="absolute inset-x-0 z-30 -mx-8 -mt-4 h-[calc(100%+2rem)] blur-2xl"
      ></div>
      <div class="z-40 my-auto">
        <NuxtLink to="/">{{ appConfig.branding.brandName }}</NuxtLink>
      </div>
      <div class="z-40 my-auto ml-auto flex justify-center gap-4">
        <NuxtLink to="/about-me">About Me</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </div>
      <div class="z-40 ml-8 flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { appConfig } from "@/config/app";

export default defineComponent({
  name: "LayoutNavbar",
  setup() {
    return {
      appConfig,
    };
  },
  components: {},
});
</script>
