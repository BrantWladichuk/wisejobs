import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { useFilters } from '@/hooks/use-filters'
import { type PostTypes } from '@/types/posts'

export default function PostTypeTab({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  const { filters, updateFilters } = useFilters()
  const tabs: { value: PostTypes, label: string }[] = [
    { value: 'any', label: 'Any' },
    { value: 'in-person', label: 'In Person' },
    { value: 'remote', label: 'Remote' },
  ]
  return (
    <div className={cn('inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800', className)} {...props}>
      {tabs.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => updateFilters('postType', value)}
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
  )
}
