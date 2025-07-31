"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogContentProps {
  title: string;
  date: string;
  readTime: string;
  tags?: string[];
  coverImage?: string | null;
  contentHtml: string;
}

export function BlogContent({
  title,
  date,
  readTime,
  tags = [],
  coverImage,
  contentHtml,
}: BlogContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let requestId: number;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      requestId = 0;
    };

    const handleScroll = () => {
      if (requestId) return;
      requestId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-pink-500 z-50 transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {coverImage && (
          <div className="w-full mb-6 flex justify-center">
            <div className="w-full max-w-xl rounded-lg overflow-hidden">
              <Image
                src={coverImage}
                alt={title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        )}

        <p className="text-gray-500 text-sm mb-2">
          {date} • {readTime}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 bg-pink-100 text-pink-800 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="prose prose-lg md:prose-xl leading-relaxed custom-blog-prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </>
  );
}
