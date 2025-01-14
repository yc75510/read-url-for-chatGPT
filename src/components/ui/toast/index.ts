import type { ToastRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export { default as Toast } from './Toast.vue'
export { default as ToastAction } from './ToastAction.vue'
export { default as ToastClose } from './ToastClose.vue'
export { default as ToastDescription } from './ToastDescription.vue'
export { default as Toaster } from './Toaster.vue'
export { default as ToastProvider } from './ToastProvider.vue'
export { default as ToastTitle } from './ToastTitle.vue'
export { default as ToastViewport } from './ToastViewport.vue'
export { toast, useToast } from './use-toast'

import { cva, type VariantProps } from 'class-variance-authority'

export const toastVariants = cva(
  'ubot-group ubot-pointer-events-auto ubot-relative ubot-flex ubot-w-full ubot-items-center ubot-justify-between ubot-space-x-4 ubot-overflow-hidden ubot-rounded-md ubot-border ubot-p-6 ubot-pr-8 ubot-shadow-lg ubot-transition-all data-[swipe=cancel]:ubot-translate-x-0 data-[swipe=end]:ubot-translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:ubot-translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:ubot-transition-none data-[state=open]:ubot-animate-in data-[state=closed]:ubot-animate-out data-[swipe=end]:ubot-animate-out data-[state=closed]:ubot-fade-out-80 data-[state=closed]:ubot-slide-out-to-right-full data-[state=open]:ubot-slide-in-from-top-full data-[state=open]:sm:ubot-slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'ubot-border ubot-bg-background ubot-text-foreground',
        destructive:
                    'ubot-destructive ubot-group ubot-border-destructive ubot-bg-destructive ubot-text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class']
  variant?: ToastVariants['variant']
  onOpenChange?: ((value: boolean) => void) | undefined
}
