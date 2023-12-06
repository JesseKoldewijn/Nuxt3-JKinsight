<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import type { ToggleEmits, ToggleProps } from "radix-vue";
import { Toggle, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";

import { cn } from "@/lib/utils";

import { toggleVariants } from ".";

interface ToggleVariantProps extends VariantProps<typeof toggleVariants> {}

interface Props extends ToggleProps {
  variant?: ToggleVariantProps["variant"];
  size?: ToggleVariantProps["size"];
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  disabled: false,
});
const emits = defineEmits<ToggleEmits>();

const toggleProps = computed(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { variant, size, disabled, ...otherProps } = props;
  return otherProps;
});

const forwarded = useForwardPropsEmits(toggleProps, emits);
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size, class: $attrs.class ?? '' }))"
    :disabled="props.disabled"
  >
    <slot />
  </Toggle>
</template>
