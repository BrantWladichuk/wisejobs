import { type PropsWithChildren } from 'react'
import AppearanceToggleTab from '@/components/appearance-tabs'
import { Link, usePage, router } from '@inertiajs/react'
import { type SharedData } from '@/types'

type MainLayoutProps = {
  asAdmin?: boolean;
}

export default ({ children, asAdmin = false }: PropsWithChildren<MainLayoutProps>) => {
  const { auth } = usePage<SharedData>().props
  const handleLogout = () => {
    router.flushAll()
  }
  return (
    <>
      <nav className='bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className="flex items-center">
              <Link href={route('home')}>
                <img src="/img/wisejobs-logo.png" alt="WiseJobs Logo" className='w-24' />
              </Link>
              {asAdmin && (
                <span className='ml-4 text-white font-semibold'>Admin Panel</span>
              )}
            </div>
            <div className='flex items-center space-x-4'>
              {asAdmin && auth.user && (
                <Link className='text-white' method="post" href={route('logout')} as="button" onClick={handleLogout}>
                  Log out
                </Link>
              )}
              {!asAdmin && (
                <Link className='text-white' href={route('login')}>
                  Admin
                </Link>
              )}
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