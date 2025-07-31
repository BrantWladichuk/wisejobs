import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import CompaniesLayout from '@/layouts/companies/layout';
import { useForm } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Companies',
    href: '/admin/companies',
  },
];

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
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Companies" />
      <CompaniesLayout>
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
      </CompaniesLayout>
    </AppLayout>
  );
}
