<script lang="ts" setup>
const toggleTheme = (currentTheme: string) => {
  if (!process.client) return;

  if (currentTheme == "dark") {
    useColorMode().preference = "light";
  } else {
    useColorMode().preference = "dark";
  }
};
</script>

<template>
  <div>
    <Button
      @click="toggleTheme($colorMode.value)"
      class="rounded-full border p-2"
      v-motion="{
        initial: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      }"
    >
      <span
        v-if="$colorMode.value === 'light'"
        v-motion="{
          initial: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
        }"
      >
        <Moon />
      </span>
      <span
        v-else
        v-motion="{
          initial: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
        }"
      >
        <Sun />
      </span>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Sun, Moon } from "lucide-vue-next";

export default defineComponent({
  name: "ThemeToggle",
  components: {
    Sun,
    Moon,
  },
});
</script>
