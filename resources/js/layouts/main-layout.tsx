import { type ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className="mb-8">
          WiseJobs - Wise Jobs For Wise People
        </div>
        {children}
      </div>
    </>
  )
}