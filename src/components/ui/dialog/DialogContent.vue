<script setup lang="ts">
import { cn } from '@/utils/tailwindcss-utils'
import { X } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="ubot-fixed ubot-inset-0 ubot-z-50 ubot-bg-black/80 ubot- data-[state=open]:ubot-animate-in data-[state=closed]:ubot-animate-out data-[state=closed]:ubot-fade-out-0 data-[state=open]:ubot-fade-in-0"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'ubot-fixed ubot-left-1/2 ubot-top-1/2 ubot-z-50 ubot-grid ubot-w-full ubot-max-w-lg ubot--translate-x-1/2 ubot--translate-y-1/2 ubot-gap-4 ubot-border ubot-bg-background ubot-p-6 ubot-shadow-lg ubot-duration-200 data-[state=open]:ubot-animate-in data-[state=closed]:ubot-animate-out data-[state=closed]:ubot-fade-out-0 data-[state=open]:ubot-fade-in-0 data-[state=closed]:ubot-zoom-out-95 data-[state=open]:ubot-zoom-in-95 data-[state=closed]:ubot-slide-out-to-left-1/2 data-[state=closed]:ubot-slide-out-to-top-[48%] data-[state=open]:ubot-slide-in-from-left-1/2 data-[state=open]:ubot-slide-in-from-top-[48%] sm:ubot-rounded-lg',
          props.class,
        )"
    >
      <slot />

      <DialogClose
        class="ubot-absolute ubot-right-4 ubot-top-4 ubot-rounded-sm ubot-opacity-70 ubot-ring-offset-background ubot-transition-opacity hover:ubot-opacity-100 focus:ubot-outline-none focus:ubot-ring-2 focus:ubot-ring-ring focus:ubot-ring-offset-2 disabled:ubot-pointer-events-none data-[state=open]:ubot-bg-accent data-[state=open]:ubot-text-muted-foreground"
      >
        <X class="ubot-w-4 ubot-h-4" />
        <span class="ubot-sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
