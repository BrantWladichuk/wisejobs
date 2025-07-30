import { type SharedData } from '@/types'
import { Head, Link, usePage } from '@inertiajs/react'
import MainLayout from '@/layouts/main-layout'
import Posts from '@/components/posts'
import { type PostListing } from '@/types/posts'

type IndexProps = {
  posts: PostListing[]
}

export default function Index({
  posts
}: IndexProps) {
  return (
    <>
      <Head title="WiseJobs - Wise Jobs For Wise People" />
      <MainLayout>
        <Posts posts={posts} />
      </MainLayout>
    </>
  )
}