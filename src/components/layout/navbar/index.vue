<template>
  <nav class="fixed inset-x-0 top-0 z-40 flex bg-[rgba(0,0,0,0.75)] px-6 py-4">
    <div class="relative inset-0 flex w-full">
      <div
        class="absolute inset-x-0 z-30 -mx-8 -mt-4 h-[calc(100%+2rem)] blur-2xl"
      ></div>
      <div class="navbar__logo">
        <NuxtLink to="/">JKinsight</NuxtLink>
      </div>
      <div class="ml-auto flex justify-center gap-4">
        <NuxtLink to="/about-me">About Me</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutNavbar",
  setup() {
    return {};
  },
  components: {},
});
</script>
