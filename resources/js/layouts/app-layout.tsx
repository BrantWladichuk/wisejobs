import { type BreadcrumbItem } from '@/types'
import type { PropsWithChildren } from 'react'

export default function AppLayout({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl">
        {children}
      </main>
    </div>
  )
}
