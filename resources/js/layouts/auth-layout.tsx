import { type PropsWithChildren } from 'react'
import MainLayout from '@/layouts/main-layout'

export default function AuthLayout({ children}: PropsWithChildren) {
  return (
    <MainLayout asAdmin>
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-8">
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
