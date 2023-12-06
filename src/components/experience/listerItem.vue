<template>
  <Card
    class="flex max-w-md flex-col gap-4 border-neutral-800 px-3 py-2 dark:border-neutral-300"
  >
    <strong class="pt-3 text-lg font-semibold">{{ experience.title }}</strong>
    <p>
      {{ experience.description }}
    </p>
    <ul v-if="experience.skills" class="mb-3 flex flex-wrap gap-2 gap-y-4 pt-2">
      <li v-for="skill in skillsArray(experience.skills)" :key="experience.id">
        <span
          class="rounded-xl border border-neutral-500 bg-neutral-200 px-2 py-1 dark:border-neutral-300 dark:bg-neutral-800"
          >{{ skill }}</span
        >
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps(["experience"]);
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceListerItem",
  methods: {
    skillsArray(skill: string) {
      return skill.split(",");
    },
  },
});
</script>
