import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import PostModel from "@/models/Post";
import { connect } from "@/utils/db";

interface Post {
  id: number;
  title: string;
  content: string;
}

export const GET = async (request: NextApiRequest) => {
  const url = request.url ? new URL(request.url, "http://localhost") : null;
  const username = url?.searchParams.get("username");

  try {
    await connect();
    const posts: Post[] = await PostModel.find(username ? { username } : {});
    console.log(posts, "these are my posts....");

    const postsString = JSON.stringify(posts);
    return new NextResponse(postsString, { status: 200 });
  } catch (error) {
    return new NextResponse("database error", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const newPost = new PostModel(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
