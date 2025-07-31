import { Head } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { type CompanyListing } from '@/types/companies'
import { Link } from '@inertiajs/react'

type CompaniesIndexProps = {
  companies: CompanyListing[];
};

export default function CompaniesIndex({
  companies
}: CompaniesIndexProps) {
  return (
    <AdminLayout>
      <Head title="Companies" />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Companies</h1>
        <Link href={route('companies.create')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Company
        </Link>
      </div>
      <div className="space-y-6">
        {companies.map(company => (
          <div key={company.id} className="p-4 border rounded-md inline-block w-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <div className='flex items-center space-x-4'>
                <Link href={route('companies.show', { id: company.id })} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <Link href={route('posts.index', { company_id: company.id })} className="text-blue-600 hover:underline">
                  Jobs Postings ({company.posts_count})
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}
