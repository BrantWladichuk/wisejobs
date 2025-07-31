import { Link } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'

export default function AuthLayout({ children}: PropsWithChildren) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
              <div className="mb-1 flex items-center justify-center rounded-md">
                <img src="/img/wisejobs-logo.png" alt="WiseJobs Admin Logo" className="w24" />
              </div>
              <span className="sr-only">WiseJobs Admin</span>
            </Link>
            <div className="space-y-2 text-center">
              <h1 className="text-xl font-medium">WiseJobs Admin</h1>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
