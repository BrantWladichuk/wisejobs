import { type PostListing } from '@/types/posts'
import { Link } from '@inertiajs/react'
import { formatSalary, formatType } from '@/lib/utils'

type PostProps = {
  post: PostListing
}

export default ({
  post
}: PostProps) => {
  return (
    <Link href={`/job/${post.id}`} className="block px-8 py-6 md:px-10 md:py-8 border rounded shadow-sm hover:shadow-lg transition-shadow light:bg-white dark:bg-gray-800">
      <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
        <div>
          <strong className='text-blue-600 mb-2 text-sm'>{post.company.name}</strong>
          <h2 className='text-xl md:text-2xl font-bold mb-2'>{post.title}</h2>
          <p className='text-xs text-gray-500'>{formatSalary(post.salary)}</p>
        </div>
        <div>
          <p className='text-sm text-gray-600 capitalize'>{formatType(post.type)} / {post.location}</p>
        </div>
      </div>
    </Link>
  )
}