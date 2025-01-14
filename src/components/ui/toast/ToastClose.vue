<script setup lang="ts">
import { cn } from '@/utils/tailwindcss-utils'
import { X } from 'lucide-vue-next'
import { ToastClose, type ToastCloseProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps"
    :class="cn('ubot-absolute ubot-right-2 ubot-top-2 ubot-rounded-md ubot-p-1 ubot-text-foreground/50 ubot-opacity-0 ubot-transition-opacity hover:ubot-text-foreground focus:ubot-opacity-100 focus:ubot-outline-none focus:ubot-ring-2 group-hover:ubot-opacity-100 group-[.destructive]:ubot-text-red-300 group-[.destructive]:hover:ubot-text-red-50 group-[.destructive]:focus:ubot-ring-red-400 group-[.destructive]:focus:ubot-ring-offset-red-600', props.class)">
    <X class="ubot-h-4 ubot-w-4" />
  </ToastClose>
</template>
