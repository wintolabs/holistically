import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  coverImage: string | null;
  tags: string[];
}

export function BlogCard({
  slug,
  title,
  date,
  excerpt,
  readTime,
  coverImage,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`}>
      <article className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        {/* Cover Image */}
        {coverImage && (
          <div className="relative h-48 w-full">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">
            {date} • {readTime}
          </p>
          <p className="text-gray-700 line-clamp-3">{excerpt}</p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-0.5 bg-pink-100 text-pink-800 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
