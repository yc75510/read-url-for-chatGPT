import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'ubot-inline-flex ubot-items-center ubot-justify-center ubot-gap-2 ubot-whitespace-nowrap ubot-rounded-md ubot-text-sm ubot-font-medium ubot-ring-offset-background ubot-transition-colors focus-visible:ubot-outline-none focus-visible:ubot-ring-2 focus-visible:ubot-ring-ring focus-visible:ubot-ring-offset-2 disabled:ubot-pointer-events-none disabled:ubot-opacity-50 [&_svg]:ubot-pointer-events-none [&_svg]:ubot-size-4 [&_svg]:ubot-shrink-0',
  {
    variants: {
      variant: {
        default:
          'ubot-bg-primary ubot-text-primary-foreground ubot-shadow hover:ubot-bg-primary/90',
        destructive:
          'ubot-bg-destructive ubot-text-destructive-foreground ubot-shadow-sm hover:ubot-bg-destructive/90',
        outline:
          'ubot-border ubot-border-input ubot-bg-background ubot-shadow-sm hover:ubot-bg-accent hover:ubot-text-accent-foreground',
        secondary:
          'ubot-bg-secondary ubot-text-secondary-foreground ubot-shadow-sm hover:ubot-bg-secondary/80',
        ghost: 'hover:ubot-bg-accent hover:ubot-text-accent-foreground',
        link: 'ubot-text-primary ubot-underline-offset-4 hover:ubot-underline',
      },
      size: {
        default: 'ubot-h-9 ubot-px-4 ubot-py-2',
        sm: 'ubot-h-8 ubot-rounded-md ubot-px-3 ubot-text-xs',
        lg: 'ubot-h-10 ubot-rounded-md ubot-px-8',
        icon: 'ubot-h-9 ubot-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
