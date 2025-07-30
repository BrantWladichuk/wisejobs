export type Company = {
  id: number
  slug: string
  name: string
  logo: string
}

export type PostListing = {
  id: number
  title: string
  salary: number
  location: string
  type: 'remote' | 'in-person'
  company: Company
}

