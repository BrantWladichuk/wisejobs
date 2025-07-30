import { type PostListing } from '@/types/posts'

type PostsProps = {
  posts: PostListing[]
}

export default ({
  posts
}: PostsProps) => {
  return (
    <>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>Salary: {post.salary}</p>
          <p>Location: {post.location}</p>
          <p>Type: {post.type}</p>
          <p>Company: {post.company.name}</p>
        </li>
      ))}
    </>
  )
}