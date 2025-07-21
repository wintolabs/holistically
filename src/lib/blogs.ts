import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export async function getAllBlogs() {
  const filenames = await fs.readdir(blogsDirectory);

  const blogs = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(blogsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage ?? null,
        tags: data.tags ?? [],
        content,
        readTime: getReadTime(content),
      };
    })
  );

  return blogs;
}

export async function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage ?? null,
    tags: data.tags ?? [],
    content,
    readTime: getReadTime(content),
  };
}

function getReadTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}
