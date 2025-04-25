"use client";

import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { BlogPost } from "@/lib/contentful";

interface BlogPostPageClientProps {
  post: BlogPost;
}

export default function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  return (
    <article className="max-w-4xl mx-auto py-16 px-4">
      <div className="relative h-[400px] mb-8">
        <Image
          src={post.featuredImage.fields.file.url}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={post.author.fields.avatar.fields.file.url}
            alt={post.author.fields.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{post.author.fields.name}</p>
          <p className="text-gray-600">
            {format(new Date(post.publishedDate), "MMMM d, yyyy")}
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
