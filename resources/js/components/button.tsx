import type { PropsWithChildren } from 'react'
import React from 'react'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  type
}: ButtonProps & PropsWithChildren) {
  return (
    <button>
      {children}
    </button>
  )
}