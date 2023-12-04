<template>
  <LayoutNavbar />
  <div class="mx-4 mt-14">
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
