import { createClient } from "contentful";
const contentful = require("contentful-management");
console.log("Space:", process.env.CONTENTFUL_SPACE_ID);
const spaceId = process.env.CONTENTFUL_SPACE_ID!;
const accessTokenPublished = process.env.CONTENTFUL_ACCESS_TOKEN_PUBLISHED!;
const accessTokenDraft = process.env.CONTENTFUL_ACCESS_TOKEN_DRAFT!;

const accessTokenPost = process.env.CONTENTFUL_ACCESS_TOKEN_POST!;

if (!spaceId) {
  throw new Error("CONTENTFUL_SPACE_ID is not defined");
}

let accessToken;
if (process.env.NODE_ENV === "production") {
  if (!accessTokenPublished) {
    throw new Error("CONTENTFUL_ACCESS_TOKEN_PUBLISHED is not defined");
  }
  accessToken = accessTokenPublished;
} else {
  if (!accessTokenDraft) {
    throw new Error("CONTENTFUL_ACCESS_TOKEN_DRAFT is not defined");
  }
  accessToken = accessTokenDraft;
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const clientPost = contentful.createClient({
  accessToken: accessTokenPost,
});

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  publishedDate: string;
  author: {
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
  };
  seoFields: any;
}

export async function getRecentBlogPosts(limit = 3): Promise<BlogPost[]> {
  const response = await client.getEntries({
    content_type: "page",
    order: ["-fields.publishedDate"],
    limit,
    include: 1, // Adjust the depth as needed
  });

  return response.items.map((item: any) => item.fields as BlogPost);
}
