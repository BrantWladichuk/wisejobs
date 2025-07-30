import { Head } from '@inertiajs/react'
import MainLayout from '@/layouts/main-layout'
import Posts from '@/components/posts'
import { type PostListing } from '@/types/posts'
import PostFilter from '@/components/post-filter'

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
        <PostFilter />
        <Posts posts={posts} />
      </MainLayout>
    </>
  )
}