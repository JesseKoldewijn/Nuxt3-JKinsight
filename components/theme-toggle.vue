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
    >
      <span v-if="$colorMode.value === 'light'">
        <Moon />
      </span>
      <span v-else>
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
