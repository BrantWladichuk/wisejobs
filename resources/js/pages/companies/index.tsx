import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import CompaniesLayout from '@/layouts/companies/layout';
import { type CompanyListing } from '@/types/companies';
import { Link } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Companies',
    href: '/admin/companies',
  },
];

type CompaniesIndexProps = {
  companies: CompanyListing[];
};

export default function CompaniesIndex({
  companies
}: CompaniesIndexProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Companies" />
      <CompaniesLayout>
        <div className="space-y-6">
          {companies.map(company => (
            <div key={company.id} className="p-4 border rounded-md inline-block w-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="flex items-center justify-between">
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
      </CompaniesLayout>
    </AppLayout>
  );
}
