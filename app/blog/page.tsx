import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center mb-4"
          >
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ブログ</h1>
          <p className="text-gray-600">技術的な学びや知見を共有しています</p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-500">記事がまだありません</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors">
                  {post.frontMatter.title}
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  {new Date(post.frontMatter.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600">{post.frontMatter.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
