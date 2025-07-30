import { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useForm, usePage } from '@inertiajs/react'

type Filters = {
  search: string
  minSalary: number
  postType: string
}

export function useFilters() {
  const { filters } = usePage().props
  const typedFilters = filters as Filters
  const { data, setData, get } = useForm({ 
    search: typedFilters.search,
    minSalary: typedFilters.minSalary,
    postType: typedFilters.postType,
  })
  const fetchNewPosts = () => {
    get('/', { preserveState: true, replace: true })
  }
  useEffect(() => {
    fetchNewPosts()
  }, [data.minSalary, data.postType])
  const debouncedGet = useDebouncedCallback(() => {
    fetchNewPosts()
  }, 300)
  return {
    filters: {
      minSalary: data.minSalary,
      postType: data.postType,
    },
    updateFilters: setData,
    search: data.search,
    updateSearch: (value: string) => {
      setData('search', value)
      debouncedGet()
    }
  }
}