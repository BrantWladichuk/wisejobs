import { cn } from "@/lib/utils"
import React from "react"

export default function Input({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
        className,
      )}
      {...props}
    />
  )
}
