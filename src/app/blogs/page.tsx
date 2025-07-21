import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";

export default async function BlogListPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="border p-4 rounded hover:shadow transition"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h2 className="text-xl font-semibold text-neutral-900 hover:underline">
                {blog.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">
              {blog.date} • {blog.readTime}
            </p>
            <p className="text-gray-700 mt-1">{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
