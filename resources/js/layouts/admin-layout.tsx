import { type PropsWithChildren } from 'react'
import MainLayout from '@/layouts/main-layout'

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <MainLayout asAdmin>
      <div className="px-4 py-6">
        {children}
      </div>
    </MainLayout>
  )
}
