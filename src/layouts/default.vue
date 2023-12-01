<template>
  <html>
    <body class="dark">
      <slot />
    </body>
  </html>
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
