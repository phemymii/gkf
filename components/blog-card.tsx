import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { BlogPost } from "@/lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export function BlogCard({ post }: { post: BlogPost }) {
  const htmlContent = documentToHtmlString(post.content as any);

  return (
    <Card className="overflow-hidden shadow-md">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={post.featuredImage.fields.file.url}
          alt={post.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={post.author.fields.avatar.fields.file.url}
              alt={post.author.fields.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm text-gray-600">
            <p>{post.author.fields.name}</p>
            <p>{format(new Date(post.publishedDate), "MMM d, yyyy")}</p>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-[#67903e] cursor-pointer">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
        <div
          className="prose max-w-none line-clamp-2 mb-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        <Link href={`/blog/${post.slug}`}>
          <Button
            variant="outline"
            className="w-full hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white"
          >
            Read More
          </Button>
        </Link>
      </div>
    </Card>
  );
}
