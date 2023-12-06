<script setup lang="ts">
import type { ComboboxGroupProps } from 'radix-vue'
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<ComboboxGroupProps & {
  heading?: string
}>()
</script>

<template>
  <ComboboxGroup
    v-bind="props"
    :class="cn('overflow-hidden p-1 text-neutral-950 dark:text-neutral-50', $attrs.class ?? '')"
  >
    <ComboboxLabel v-if="heading" class="px-2 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
