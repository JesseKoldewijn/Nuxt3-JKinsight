<template>
  <div class="flex flex-col gap-8">
    <h1 class="mx-auto text-lg md:text-2xl">Projects</h1>
    <div class="flex w-full justify-center">
      <ProjectsLister />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
});
</script>
