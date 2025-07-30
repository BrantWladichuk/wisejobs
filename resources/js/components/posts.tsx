import { type PostListing } from '@/types/posts'
import Post from '@/components/post'

type PostsProps = {
  posts: PostListing[]
}

export default ({
  posts
}: PostsProps) => {
  return (
    <div className="space-y-6">
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}