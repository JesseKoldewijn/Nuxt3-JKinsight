<template>
  <LayoutNavbar />
  <div
    class="mx-4 mt-20 !transition-colors !duration-200"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
  >
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
