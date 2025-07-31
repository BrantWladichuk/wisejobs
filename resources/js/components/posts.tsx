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
      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No posts found. Try adjusting your filters, or trying a different search term.
        </div>
      )}
    </div>
  )
}