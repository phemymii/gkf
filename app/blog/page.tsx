import { client, BlogPost } from "@/lib/contentful";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 10;
  const skip = (currentPage - 1) * postsPerPage;

  const response = await client.getEntries({
    content_type: "pageBlogPost",
    order: ["-sys.createdAt"],
    skip,
    limit: postsPerPage,
  });

  const posts = response.items.map((item: any) => item.fields as BlogPost);
  const totalPages = Math.ceil(response.total / postsPerPage);

  return (
    <div className="mx-auto py-16">
      <div className="relative bg-[#556B2F] text-white py-24 max-md:py-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/30945289/pexels-photo-30945289/free-photo-of-podcast-news-concept-with-wooden-letter-tiles.jpeg"
            alt="People helping community"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">Blog Posts</h1>
            <p className="md:text-xl opacity-90">
              Here is a few of our updates at GKF.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href={`/blog?page=${Math.max(1, currentPage - 1)}`}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          >
            <Button variant="outline" disabled={currentPage === 1}>
              Previous
            </Button>
          </Link>
          <span className="flex items-center">
            Page {currentPage} of {totalPages}
          </span>
          <Link
            href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          >
            <Button variant="outline" disabled={currentPage === totalPages}>
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
