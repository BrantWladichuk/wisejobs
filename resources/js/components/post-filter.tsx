import PostTypeTab from '@/components/post-type'
import { useFilters } from '@/hooks/use-filters'

export default () => {
  const { 
    filters, 
    updateFilters,
    search,
    updateSearch
  } = useFilters()
  return (
    <div>
      <input
        value={search || ''}
        onChange={(e) => updateSearch(e.target.value)}
        autoFocus
        type="text" 
        placeholder="Search by job title, company, or location" 
        className="border rounded px-4 py-2 w-full mb-4" />
      <div className="flex justify-between mb-4">
        <PostTypeTab />
        <div className="flex items-center gap-2">
          <select
            value={filters.minSalary}
            onChange={(e) => updateFilters('minSalary', parseInt(e.target.value))}
            className="border rounded px-4 py-2">
              <option value={0}>No Minimum Salary</option>
              <option value={30000}>$30,000</option>
              <option value={50000}>$50,000</option>
              <option value={70000}>$70,000</option>
              <option value={100000}>$100,000</option>
              <option value={150000}>$150,000</option>
              <option value={200000}>Over $200,000</option>
          </select>
        </div>
      </div>
    </div>
  )
}