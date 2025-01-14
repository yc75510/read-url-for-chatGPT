<script setup lang="ts">
import { cn } from '@/utils/tailwindcss-utils'
import {
  AlertDialogDescription,
  type AlertDialogDescriptionProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogDescription v-bind="delegatedProps" :class="cn('ubot-text-sm ubot-text-muted-foreground', props.class)">
    <slot />
  </AlertDialogDescription>
</template>
