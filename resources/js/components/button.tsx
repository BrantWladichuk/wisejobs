import type { PropsWithChildren } from 'react'
import React from 'react'

type ButtonProps = {
  type?: 'button' | 'submit'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  type
}: ButtonProps & PropsWithChildren) {
  return (
    <button type={type} className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
      {children}
    </button>
  )
}