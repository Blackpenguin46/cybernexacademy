import * as React from "react"
import { useToast } from "@/components/ui/use-toast"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function Toast({ title, description, variant = "default" }: ToastProps) {
  const { toast } = useToast()

  React.useEffect(() => {
    if (title || description) {
      toast({
        title,
        description,
        variant,
      })
    }
  }, [title, description, variant, toast])

  return null
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${
            toast.variant === "destructive"
              ? "bg-red-600"
              : "bg-gray-900"
          } text-white px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-top-5`}
        >
          {toast.title && (
            <div className="font-semibold">{toast.title}</div>
          )}
          {toast.description && (
            <div className="text-sm opacity-90">{toast.description}</div>
          )}
        </div>
      ))}
    </div>
  )
} 