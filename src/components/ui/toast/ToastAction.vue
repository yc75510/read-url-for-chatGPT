<script setup lang="ts">
import { cn } from '@/utils/tailwindcss-utils'
import { ToastAction, type ToastActionProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction v-bind="delegatedProps"
    :class="cn('ubot-inline-flex ubot-h-8 ubot-shrink-0 ubot-items-center ubot-justify-center ubot-rounded-md ubot-border ubot-bg-transparent ubot-px-3 ubot-text-sm ubot-font-medium ubot-ring-offset-background ubot-transition-colors hover:ubot-bg-secondary focus:ubot-outline-none focus:ubot-ring-2 focus:ubot-ring-ring focus:ubot-ring-offset-2 disabled:ubot-pointer-events-none disabled:ubot-opacity-50 group-[.destructive]:ubot-border-muted/40 group-[.destructive]:hover:ubot-border-destructive/30 group-[.destructive]:hover:ubot-bg-destructive group-[.destructive]:hover:ubot-text-destructive-foreground group-[.destructive]:focus:ubot-ring-destructive', props.class)">
    <slot />
  </ToastAction>
</template>
