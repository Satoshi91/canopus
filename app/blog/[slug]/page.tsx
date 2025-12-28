import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center mb-8"
        >
          ← ブログ一覧に戻る
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.frontMatter.title}
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            {new Date(post.frontMatter.date).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {post.frontMatter.description && (
            <p className="text-lg text-gray-600">{post.frontMatter.description}</p>
          )}
        </header>

        <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-sm p-8">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}

