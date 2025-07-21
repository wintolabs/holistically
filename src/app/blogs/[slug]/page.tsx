import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { BlogContent } from "@/components/BlogContent";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return notFound();

  const processedContent = await remark().use(html).process(blog.content);
  const contentHtml = processedContent.toString();

  return (
    <BlogContent
      title={blog.title}
      date={blog.date}
      readTime={blog.readTime}
      tags={blog.tags}
      coverImage={blog.coverImage}
      contentHtml={contentHtml}
    />
  );
}
