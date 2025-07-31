import { Head } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { useForm } from '@inertiajs/react'
import Back from '@/components/back'

type FormData = {
  title: string;
  body: string;
  salary: number;
  type: 'in-person' | 'remote';
  location: string;
};

type PostsCreateProps = {
  company: {
    id: number;
    name: string;
  }
}

export default function PostsCreate({
  company
}: PostsCreateProps) {
  const { data, setData, post } = useForm<FormData>({
    title: '',
    body: '',
    salary: 0,
    type: 'in-person',
    location: ''
  })
  return (
    <AdminLayout>
      <Head title="Create Job" />
      <Back href={route('posts.index', { company_id: company.id })} />
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Create Job For {company.name}</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          post(route('posts.store', { company_id: company.id }))
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
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create
          </button>
        </form>
      </div>
    </AdminLayout>
  )
}
