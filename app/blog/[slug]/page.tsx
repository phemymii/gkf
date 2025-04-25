// app/blog/[slug]/page.tsx

import { client, BlogPost } from "@/lib/contentful";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import BlogComments from "@/components/BlogComments";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Define the type for route parameters
type Params = {
  slug: string;
};

// Export the generateStaticParams function
export async function generateStaticParams(): Promise<Params[]> {
  const response = await client.getEntries({
    content_type: "pageBlogPost",
    select: ["fields.slug"],
  });

  return response.items.map((item: any) => ({
    slug: item.fields.slug,
  }));
}

// Export the page component
export default async function BlogPostPage({ params }: { params: Params }) {
  // Fetch the main blog post
  const response = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug": params.slug,
    limit: 1,
  });

  if (response.items.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const postData = response.items[0].fields;
  const post: BlogPost = {
    title: postData.title as string,
    slug: postData.slug as string,
    excerpt: postData.excerpt as string,
    content: postData.content as string,
    featuredImage: postData.featuredImage as {
      fields: {
        file: {
          url: string;
        };
      };
    },
    publishedDate: postData.publishedDate as string,
    author: postData.author as {
      fields: {
        name: string;
        avatar: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    },
    seoFields: postData.seoFields as any,
  };

  // Fetch related posts (excluding the current post)
  const relatedResponse = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug[ne]": params.slug,
    order: ["-sys.createdAt"],
    limit: 3,
  });

  const relatedPosts = relatedResponse.items.map(
    (item: any) => item.fields as BlogPost
  );

  const htmlContent = documentToHtmlString(post.content as any);

  return (
    <div className="py-20 max-md:py-16">
      <article className="mx-auto mb-12">
        <div className="relative  text-white h-[400px] max-md:h-[250px]">
          <div className="absolute inset-0">
            <Image
              src={post.featuredImage.fields.file.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto max-w-4xl mt-10 px-10">
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
          {/* <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p> */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Comments</h2>
          <BlogComments blogId={response.items[0].sys.id ?? ""} />
        </div>

        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={index} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
