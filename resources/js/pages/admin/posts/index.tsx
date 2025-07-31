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

type Post = {
  id: number;
  title: string;
  salary: number;
  type: string;
  location: string;
}

type PostsIndexProps = {
  company: {
    id: number;
    name: string;
    posts: Post[];
  }
}

export default function PostsIndex({
  company
}: PostsIndexProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={company.name + "\'s job postings"} />
      <CompaniesLayout>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{company.name} - Job Postings</h1>
          <Link href={route('posts.create', { company_id: company.id })} className="btn btn-primary">
            Create New Post
          </Link>
        </div>
        <div className="space-y-6">
          {company.posts.map(post => (
            <Link href={route('posts.show', { company_id: company.id, id: post.id })} key={company.id + '_post_' + post.id} className="p-4 border rounded-md inline-block w-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </CompaniesLayout>
    </AppLayout>
  );
}
