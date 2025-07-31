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
            <Link href={route('companies.show', { id: company.id })} key={company.id} className="p-4 border rounded-md inline-block w-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-500">Created at: {new Date(company.created_at).toLocaleDateString()}</p>  
            </Link>
          ))}
        </div>
      </CompaniesLayout>
    </AppLayout>
  );
}
