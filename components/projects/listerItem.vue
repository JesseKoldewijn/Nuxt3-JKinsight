<template>
  <Card
    class="flex max-w-sm flex-col gap-4 border-neutral-800 px-3 py-2 [orphans:2] dark:border-neutral-300"
  >
    <strong class="pt-3 text-lg font-semibold">{{ project.title }}</strong>
    <p>
      {{ project.description }}
    </p>
    <ul v-if="project.tags" class="mb-3 flex flex-wrap gap-2 gap-y-4 pt-2">
      <li v-for="tag in tagsArray(project.tags)" :key="project.id">
        <span
          class="rounded-xl border border-neutral-500 bg-neutral-200 px-2 py-1 dark:border-neutral-300 dark:bg-neutral-800"
          >{{ tag }}</span
        >
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { defineComponent } from "vue";

defineProps(["project"]);
</script>

<script lang="ts">
export default defineComponent({
  name: "ProjectsListerItem",
  methods: {
    tagsArray(tags: string) {
      return tags.split(",");
    },
  },
});
</script>
