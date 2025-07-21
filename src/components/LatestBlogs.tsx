import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import Image from "next/image";

export async function LatestBlogs() {
  const blogs = await getAllBlogs();
  const latest = blogs.slice(0, 3); // Show top 3 blogs

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#fbe5ee] via-white to-[#d3f0f4]">
      <div className="py-16 px-4 max-w-6xl mx-auto" id="latest-blogs">
        <h2 className="text-3xl font-bold mb-8 text-center">📚 Latest Blogs</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {latest.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white dark:bg-neutral-900">
                {blog.coverImage && (
                  <div className="relative w-full h-40">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-500">
                    {blog.date} • {blog.readTime}
                  </p>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/blogs">
            <button className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
