"use client"

import { useToast } from "./use-toast"

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