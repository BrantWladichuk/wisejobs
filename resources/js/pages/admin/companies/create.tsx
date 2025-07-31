import { Head } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { useForm } from '@inertiajs/react'
import Back from '@/components/back'

type FormData = {
  name: string;
  website: string;
};

export default function CompaniesCreate() {
  const { data, setData, post } = useForm<FormData>({
    name: '',
    website: ''
  })
  return (
    <AdminLayout>
      <Head title="Create Company" />
      <Back href={route('companies.index')} />
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Create Company</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          post(route('companies.store'))
        }}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="border rounded px-4 py-2 w-full mb-4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <input
              type="url"
              value={data.website}
              onChange={(e) => setData('website', e.target.value)}
              className="border rounded px-4 py-2 w-full mb-4"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create Company
          </button>
        </form>
      </div>
    </AdminLayout>
  )
}
