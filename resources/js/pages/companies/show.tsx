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
  const { data, setData, put, delete: destroy, processing, recentlySuccessful } = useForm<FormData>({
    name: company.name,
    website: company.website
  })
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Companies" />
      <CompaniesLayout>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{company.name}</h1>
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
              <button type="button" onClick={() => destroy(route('companies.destroy', { id: company.id }))} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
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
