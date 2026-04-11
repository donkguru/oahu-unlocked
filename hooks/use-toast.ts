// Thin wrapper — use sonner directly
export { toast } from 'sonner'

export function useToast() {
  return {
    toast: require('sonner').toast as typeof import('sonner').toast,
    dismiss: (id?: string | number) => {
      (require('sonner').toast as typeof import('sonner').toast).dismiss(id)
    },
    toasts: [] as unknown[],
  }
}
