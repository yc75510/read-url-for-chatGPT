<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/tailwindcss-utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('ubot-flex ubot-flex-col ubot-gap-y-2 ubot-text-center sm:ubot-text-left', props.class)">
    <slot />
  </div>
</template>
