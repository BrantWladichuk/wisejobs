import { Head } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { Link } from '@inertiajs/react'
import Back from '@/components/back'

type Post = {
  id: number;
  title: string;
  salary: number;
  type: string;
  location: string;
}

type PostsIndexProps = {
  company: {
    id: number;
    name: string;
    posts: Post[];
  }
}

export default function PostsIndex({
  company
}: PostsIndexProps) {
  return (
    <AdminLayout>
      <Head title={company.name + "\'s job postings"} />
      <Back href={route('companies.show', { id: company.id })} text={company.name} />
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{company.name} - Job Postings</h1>
        <Link href={route('posts.create', { company_id: company.id })} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Create New Post
        </Link>
      </div>
      <div className="space-y-6">
        {company.posts.map(post => (
          <Link href={route('posts.show', { company_id: company.id, id: post.id })} key={company.id + '_post_' + post.id} className="p-4 border rounded-md inline-block w-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </AdminLayout>
  )
}
