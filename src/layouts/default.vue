<template>
  <LayoutNavbar />
  <div class="mx-4 mt-20 !transition-colors !duration-500">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  setup() {
    return {};
  },
});
</script>
