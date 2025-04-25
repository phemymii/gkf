import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Key, Globe, BookOpen, HandHeart } from "lucide-react";
import Image from "next/image";
import { BlogCard } from "@/components/blog-card";
import { BlogPost, client } from "@/lib/contentful";
import { teamMembers } from "@/lib/team";
import Link from "next/link";
import { programmes } from "@/lib/programmes";

export default async function Home() {
  // Fetch blog posts on the server
  const response = await client.getEntries({
    content_type: "pageBlogPost",
    order: ["-sys.createdAt"],
    limit: 3,
  });
  const blogPosts = response.items.map((item: any) => item.fields as BlogPost);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
            alt="People helping community"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4 py-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Unlocking Christ's Compassion, Building Community
            </h1>
            <p className="text-xl mb-8">
              Join us in our mission to inspire and transform lives through
              Christ's compassion, creating a global community built on faith,
              love, and service.
            </p>
            <div className="space-x-4">
              <Link href="/volunteer">
                <Button
                  size="lg"
                  className="hover:bg-[#718f3f] bg-[#67903e] w-fit"
                >
                  Get Involved
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#fefaed]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-800">
              "To inspire and transform lives through Christ's compassion,
              creating a global community built on faith, love, and service."
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-800 text-center">
              Guided by the teachings of Christ, the Golden Key Foundation
              strives to unlock the potential of individuals and global
              communities by fostering compassion, promoting spiritual maturity
              and social well-being, and empowering lives through faith-driven
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
          <p className="my-6">
            The core values of Golden Key Foundation is found in the acronym
            HOPE
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                value: "H-humanity",
                description: "Serving with compassion",
              },
              {
                icon: Globe,
                value: "O-outreach",
                description: "Extending our global impact",
              },
              {
                icon: Key,
                value: "P-purpose-driven",
                description: "Acting with clear intention",
              },
              {
                icon: BookOpen,
                value: "E-excellence",
                description: "Striving for the highest standards",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 text-center hover:shadow-lg transition-shadow shadow-md bg-[#f7faf4] border-2 border-[#3d5326]"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#61873b]" />
                <h3 className="text-xl font-bold mb-2">{item.value}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-black sm:text-2xl">
            Our Programs
          </h2>
          <p className="my-6">Here is a few of our activities at GKF.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmes.slice(0, 3).map((item, i) => (
              <Card key={i} className="overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <Link href="/programmes">
            <Button
              size="lg"
              className="hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white w-fit mt-8"
            >
              Show all programmes
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-10 bg-[#edf4e6]">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4">
            <div className="mx-auto grid gap-10 xl:grid-cols-3">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-pretty text-black sm:text-2xl">
                  Meet our leadership
                </h2>
                <p className="mt-6 text-lg/8 text-gray-800">
                  We're a dynamic group of individuals who are passionate about
                  what we do and dedicated to delivering the best results for
                  our clients.
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-2 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {teamMembers.slice(0, 2).map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                      <img
                        alt=""
                        src={person.image}
                        className="size-16 rounded-full h-32 w-32"
                      />
                      <div>
                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-sm/6 font-semibold text-[#4a5d29]">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/team">
                <Button
                  size="lg"
                  className="hover:hover:bg-[#e3af0c] bg-[#cb9c0b] text-white hover:text-white w-fit"
                >
                  All members
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="bg-white py-2 sm:py-4">
            <div className="mx-auto ">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-pretty text-black sm:text-2xl">
                  Partners
                </h2>
                <p className="mt-6 text-lg/8 text-gray-800">
                  We're a dynamic group of individuals who are passionate about
                  what we do and dedicated to delivering the best results for
                  our clients.
                </p>
              </div>
              <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "RCCG Power Connections Leeds",
                    image: "/partner/rccg-power.png",
                  },
                  {
                    title: "RCCG, Discipleship Centre",
                    image: "/partner/DC.jpg",
                  },
                  {
                    title: "CAC House of Glory Mission International, London",
                    image: "/partner/cac.jpeg",
                  },
                  {
                    title: "Gateway Salvation Church, London",
                    image: "/partner/GSC.png",
                  },
                  {
                    title: "Leeds City Council",
                    image: "/partner/leeds.png",
                  },
                ].map((partner) => (
                  <li key={partner.title}>
                    <div className="flex items-center gap-x-6">
                      <img
                        alt={partner.title}
                        src={partner.image}
                        className="h-32 w-32 object-contain"
                      />
                      <div>
                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                          {partner.title}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-[#fefaed]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-black sm:text-2xl">
              Latest Updates
            </h2>
            <Link href="/blog">
              <Button
                variant="outline"
                className="hover:bg-[#e3af0c] bg-[#cb9c0b] text-white hover:text-white"
              >
                View All Posts
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#edf4e6] text-black px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            "Make a Choice, Take a Chance, See the Change!"
          </p>
          <Link href={"/volunteer"}>
            <Button
              size="lg"
              className="hover:bg-[#e3af0c] bg-[#cb9c0b] text-white hover:text-white w-fit"
            >
              Get Involved Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
