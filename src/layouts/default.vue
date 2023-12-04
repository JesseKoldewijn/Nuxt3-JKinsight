<template>
  <LayoutNavbar />
  <div class="mx-4 mt-20">
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
