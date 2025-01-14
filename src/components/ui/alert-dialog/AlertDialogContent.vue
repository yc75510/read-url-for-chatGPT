<script setup lang="ts">
import { cn } from '@/utils/tailwindcss-utils'
import {
  AlertDialogContent,
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
  AlertDialogOverlay,
  AlertDialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AlertDialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<AlertDialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay
      class="ubot-fixed ubot-inset-0 ubot-z-50 ubot-bg-black/80 ubot- data-[state=open]:ubot-animate-in data-[state=closed]:ubot-animate-out data-[state=closed]:ubot-fade-out-0 data-[state=open]:ubot-fade-in-0" />
    <AlertDialogContent v-bind="forwarded" :class="cn(
      'ubot-fixed ubot-left-1/2 ubot-top-1/2 ubot-z-50 ubot-grid ubot-w-full ubot-max-w-lg ubot--translate-x-1/2 ubot--translate-y-1/2 ubot-gap-4 ubot-border ubot-bg-background ubot-p-6 ubot-shadow-lg ubot-duration-200 data-[state=open]:ubot-animate-in data-[state=closed]:ubot-animate-out data-[state=closed]:ubot-fade-out-0 data-[state=open]:ubot-fade-in-0 data-[state=closed]:ubot-zoom-out-95 data-[state=open]:ubot-zoom-in-95 data-[state=closed]:ubot-slide-out-to-left-1/2 data-[state=closed]:ubot-slide-out-to-top-[48%] data-[state=open]:ubot-slide-in-from-left-1/2 data-[state=open]:ubot-slide-in-from-top-[48%] sm:ubot-rounded-lg',
      props.class,
    )
      ">
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
