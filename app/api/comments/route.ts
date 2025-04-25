import { NextResponse } from "next/server";
import { client, clientPost } from "@/lib/contentful";

// GET /api/comments?blogId=xxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");
    if (!blogId) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const response = await client.getEntries({
      content_type: "blogComments",
      "fields.postReference.sys.id": blogId,
      order: ["-sys.createdAt"],
    });

    const comments = response.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      email: item.fields.email,
      comment: item.fields.comment,
      createdAt: item.sys.createdAt,
    }));

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST /api/comments
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, comment, blogId } = body;

    if (!name || !comment || !blogId) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const space = await clientPost.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master");

    const entry = await environment.createEntry("blogComments", {
      fields: {
        name: {
          "en-US": name,
        },
        email: {
          "en-US": email,
        },
        comment: {
          "en-US": createRichTextDocument(comment),
        },
        postReference: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: blogId,
            },
          },
        },
      },
    });

    await entry.publish();

    return NextResponse.json(
      { message: "Comment submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting comment:", error);
    return NextResponse.json(
      { error: "Failed to submit comment" },
      { status: 500 }
    );
  }
}

function createRichTextDocument(text: string) {
  return {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: text,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
}
