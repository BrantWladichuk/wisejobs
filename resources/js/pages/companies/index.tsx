import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import CompaniesLayout from '@/layouts/companies/layout';
import { type CompanyListing } from '@/types/companies';

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
            <li key={company.id} className="p-4 border rounded-md list-none">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-500">Created at: {new Date(company.created_at).toLocaleDateString()}</p>  
            </li>
          ))}
        </div>
      </CompaniesLayout>
    </AppLayout>
  );
}
