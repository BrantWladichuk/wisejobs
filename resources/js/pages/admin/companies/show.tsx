import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { Link } from '@inertiajs/react'
import Back from '@/components/back'

type FormData = {
  name: string;
  website: string;
};

type CompaniesShowProps = {
  company: {
    id: number;
    name: string;
    website: string;
  };
};

export default function CompaniesShow({
  company
}: CompaniesShowProps) {
  const { data, setData, put, delete: destroy, processing } = useForm<FormData>({
    name: company.name,
    website: company.website
  })
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this company and all it\'s job postings? This action cannot be undone.')) {
      destroy(route('companies.destroy', { id: company.id }))
    }
  }
  return (
    <AdminLayout>
      <Head title="Companies" />
      <div className="space-y-6">
        <Back href={route('companies.index')} text="All companies" />
        <div className='flex items-center justify-between mb-4'>
          <h1 className="text-2xl font-semibold">{company.name}</h1>
          <Link href={route('posts.index', { company_id: company.id })} className='text-blue-500 text-sm'>Job postings</Link>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          put(route('companies.save', { id: company.id }))
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
          <div className='flex items-center justify-between'>
            <button type="submit" disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save
            </button>
            <button type="button" onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Delete
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
