<template>
  <Suspense>
    <ul class="flex flex-col gap-6">
      <li v-for="project in projects" :key="project.id">
        <ProjectsListerItem :project="project" />
      </li>
    </ul>
  </Suspense>
</template>

<script lang="ts">
import { db } from "@/server/db/conn";
import { Projects } from "@/server/db/schemas/projects";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsLister",
  methods: {
    skillsArray(skill: string) {
      return skill.split(",");
    },
  },
  async setup() {
    const { data } = await useAsyncData("projects", () => {
      return db.select().from(Projects).execute();
    });

    return {
      projects: data,
    };
  },
});
</script>
