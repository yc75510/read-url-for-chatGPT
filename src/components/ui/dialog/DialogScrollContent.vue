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
      class="ubot-fixed ubot-inset-0 ubot-z-50 ubot-grid ubot-place-items-center ubot-overflow-y-auto ubot-bg-black/80 ubot- data-[state=open]:ubot-animate-in data-[state=closed]:ubot-animate-out data-[state=closed]:ubot-fade-out-0 data-[state=open]:ubot-fade-in-0"
    >
      <DialogContent
        :class="
          cn(
            'ubot-relative ubot-z-50 ubot-grid ubot-w-full ubot-max-w-lg ubot-my-8 ubot-gap-4 ubot-border ubot-border-border ubot-bg-background ubot-p-6 ubot-shadow-lg ubot-duration-200 sm:ubot-rounded-lg md:ubot-w-full',
            props.class,
          )
        "
        v-bind="forwarded"
        @pointer-down-outside="(event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
          }
        }"
      >
        <slot />

        <DialogClose
          class="ubot-absolute ubot-top-3 ubot-right-3 ubot-p-0.5 ubot-transition-colors ubot-rounded-md hover:ubot-bg-secondary"
        >
          <X class="ubot-w-4 ubot-h-4" />
          <span class="ubot-sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
