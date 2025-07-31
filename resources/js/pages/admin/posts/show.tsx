import { Head } from '@inertiajs/react'
import { type BreadcrumbItem } from '@/types'
import AppLayout from '@/layouts/app-layout'
import CompaniesLayout from '@/layouts/companies/layout'
import { useForm } from '@inertiajs/react'
import { Transition } from '@headlessui/react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Companies',
    href: '/admin/companies',
  },
];

type FormData = {
  title: string;
  body: string;
  salary: number;
  type: 'in-person' | 'remote';
  location: string;
};

type PostShowProps = {
  post: {
    id: number;
    title: string;
    body: string;
    salary: number;
    type: 'in-person' | 'remote';
    location: string;
    company: {
      id: number;
      name: string;
    }
  }
};

export default function PostsShow({
  post
}: PostShowProps) {
  const { data, setData, put, delete: destroy, processing, recentlySuccessful } = useForm<FormData>({
    title: post.title,
    body: post.body,
    salary: post.salary,
    type: post.type,
    location: post.location
  })
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Companies" />
      <CompaniesLayout>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            put(route('posts.save', { company_id: post.company.id, id: post.id }))
          }}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Body</label>
              <textarea
                value={data.body}
                onChange={(e) => setData('body', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Salary</label>
              <input
                type="number"
                value={data.salary}
                onChange={(e) => setData('salary', parseFloat(e.target.value))}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={data.type}
                onChange={(e) => setData('type', e.target.value as 'in-person' | 'remote')}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="in-person">In-Person</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button type="submit" disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save
              </button>
              <button type="button" onClick={() => destroy(route('posts.destroy', { company_id: post.company.id, id: post.id }))} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete
              </button>
            </div>
            <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
          >
              <p className="text-sm text-neutral-600 mt-4">Saved</p>
          </Transition>
          </form>
        </div>
      </CompaniesLayout>
    </AppLayout>
  );
}
