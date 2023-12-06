<template>
  <Suspense>
    <ul class="flex flex-col gap-6">
      <li
        v-for="experience in experiences"
        :key="new Date().getTime() + '-experience'"
      >
        <ExperienceListerItem :experience="experience" />
      </li>
    </ul>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { db } from "@/server/db/conn";
import { Experiences as Exp } from "@/server/db/schemas/experience";

export default defineComponent({
  name: "ExperienceLister",
  arguments: ["experiences"],
  methods: {
    skillsArray(skill: string) {
      return skill.split(",");
    },
  },
  async setup() {
    const { data } = await useAsyncData("experience", () => {
      return db.select().from(Exp).execute();
    });

    return {
      experiences: data,
    };
  },
});
</script>
