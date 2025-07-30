import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/layouts/main-layout'
import { formatSalary, formatType } from '@/lib/utils'

type ShowPostProps = {
  post: {
    id: number
    title: string
    body: string
    salary: number
    type: string
    location: string
    company: {
      name: string
    }
  }
}

export default function Show({
  post
}: ShowPostProps) {
  return (
    <>
      <Head title={post.title + " | WiseJobs"} />
      <MainLayout>
        <div className='flex items-center justify-between mb-6'>
          <Link href="/" className="text-blue-500 hover:underline text-sm inline-block">
            &larr; All Jobs
          </Link>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 border-b border-t py-8 mb-8'>
          <div>
            <strong className='text-blue-600 mb-2 text-sm'>{post.company.name}</strong>
            <h2 className='text-xl md:text-2xl font-bold mb-2'>{post.title}</h2>
            <p className='text-xs text-gray-500'>{formatSalary(post.salary)}</p>
          </div>
          <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4'>
            <p className='text-sm text-gray-600 capitalize'>{formatType(post.type)} / {post.location}</p>
            <button onClick={() => {
              alert('Congrats! You got the job! See you Monday.')
            }} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </MainLayout>
    </>
  )
}