<script setup lang="ts">
import { cn } from '@/utils/tailwindcss-utils'
import { ToastViewport, type ToastViewportProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastViewport v-bind="delegatedProps"
    :class="cn('ubot-fixed ubot-top-0 ubot-z-[100] ubot-flex ubot-max-h-screen ubot-w-full ubot-flex-col-reverse ubot-p-4 sm:ubot-bottom-0 sm:ubot-right-0 sm:ubot-top-auto sm:ubot-flex-col md:ubot-max-w-[420px]', props.class)" />
</template>
