import { type PropsWithChildren } from 'react'
import AppearanceToggleTab from '@/components/appearance-tabs'

export default ({ children }: PropsWithChildren) => {
  return (
    <>
      <nav className='bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <img src="/img/wisejobs-logo.png" alt="WiseJobs Logo" className='w-24' />
            <div className='flex items-center'>
              <AppearanceToggleTab />
            </div>
          </div>
        </div>
      </nav>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {children}
      </div>
    </>
  )
}