import React from 'react'

export default function Label({
  htmlFor,
  children,
}: {
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
    >
      {children}
    </label>
  )
}