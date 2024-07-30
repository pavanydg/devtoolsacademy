import Link from 'next/link'
import { getAllPosts } from '../../../lib/posts'

export default function BlogPage() {
    const posts = getAllPosts()
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Dev Tools Comparison Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mb-6">
                        <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:underline">
                            {post.title}
                        </Link>
                        <p className="text-gray-400 mt-1">{post.views} views</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}