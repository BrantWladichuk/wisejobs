import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { Head, useForm } from '@inertiajs/react'
import MainLayout from '@/layouts/main-layout'
import Posts from '@/components/posts'
import { type PostListing } from '@/types/posts'
import { type PostTypes } from '@/types/posts'
import { useDebouncedCallback } from 'use-debounce'

type IndexProps = {
  posts: PostListing[],
  filters: {
    search: string,
    minSalary: number,
    postType: string
  }
}

type Filters = {
  search: string
  minSalary: number
  postType: string
}

const tabs: { value: PostTypes, label: string }[] = [
  { value: 'any', label: 'Any' },
  { value: 'in-person', label: 'In Person' },
  { value: 'remote', label: 'Remote' },
]

export default function Index({
  posts,
  filters
}: IndexProps) {
  const { data, setData, get } = useForm<Filters>({
    search: filters.search,
    minSalary: filters.minSalary,
    postType: filters.postType,
  })
  const fetchNewPosts = () => {
    get(route('home'), {
      preserveState: true,
      replace: true,
      preserveScroll: true,
    })
  }
  useEffect(() => {
    fetchNewPosts()
  }, [data.minSalary, data.postType])
  const debouncedSearch = useDebouncedCallback(fetchNewPosts, 300)
  useEffect(() => {
    debouncedSearch()
  }, [data.search])
  return (
    <>
      <Head title="WiseJobs - Wise Jobs For Wise People" />
      <MainLayout>
        <div>
          <input
            value={data.search || ''}
            onChange={(e) => setData('search', e.target.value)}
            autoFocus
            type="text" 
            placeholder="Search by job title, company, or location" 
            className="border rounded px-4 py-2 w-full mb-4" />
          <div className="flex justify-between mb-4">
            <div className={cn('inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800')}>
              {tabs.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setData('postType', value)}
                  className={cn(
                    'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
                    filters.postType === value
                      ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                      : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                  )}>
                  <span className="ml-1.5 text-sm">{label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <select
                value={filters.minSalary}
                onChange={(e) => setData('minSalary', parseInt(e.target.value))}
                className="border rounded px-4 py-2">
                  <option value={0}>No Minimum Salary</option>
                  <option value={30000}>$30,000+</option>
                  <option value={50000}>$50,000+</option>
                  <option value={70000}>$70,000+</option>
                  <option value={100000}>$100,000+</option>
                  <option value={150000}>$150,000+</option>
                  <option value={200000}>$200,000+</option>
              </select>
            </div>
          </div>
        </div>
        <Posts posts={posts} />
      </MainLayout>
    </>
  )
}