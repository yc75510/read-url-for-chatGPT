<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/tailwindcss-utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    :class="
      cn(
        'ubot-flex ubot-flex-col-reverse sm:ubot-flex-row sm:ubot-justify-end sm:ubot-gap-x-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
