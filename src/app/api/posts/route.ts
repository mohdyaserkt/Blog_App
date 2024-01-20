// Import necessary modules and types
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/Post";
import { connect } from "@/utils/db";

// Define the Post interface
interface Post {
  id: number;
  title: string;
  content: string;
}

// Export the GET function
export const GET = async (request: NextRequest | Request) => {
  const url = request.url ? new URL(request.url as string) : null;
  const username = url?.searchParams.get("username");

  try {
    // Connect to the database
    await connect();

    // Retrieve posts based on the query parameters
    const posts: Post[] = await Post.find(username ? { username } : {});

    // Convert posts to a string and return a response
    const postsString = JSON.stringify(posts);
    return new NextResponse(postsString, { status: 200 });
  } catch (error) {
    // Handle database errors and return a response with a 500 status
    return new NextResponse("database error", { status: 500 });
  }
};

// Export the POST function
export const POST = async (request: NextRequest) => {
  // Parse the JSON body from the request
  const body = await request.json();

  // Create a new Post instance with the parsed body
  const newPost = new Post(body);

  try {
    // Connect to the database
    await connect();

    // Save the new post to the database
    await newPost.save();

    // Return a response indicating that the post has been created
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    // Handle database errors and return a response with a 500 status
    return new NextResponse("Database Error", { status: 500 });
  }
};
