<script lang="ts" setup>
const toggleTheme = (currentTheme: string) => {
  console.log(currentTheme);
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
    <Button @click="toggleTheme($colorMode.value)">
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
  name: "LayoutThemeToggle",
  components: {
    Sun,
    Moon,
  },
});
</script>
