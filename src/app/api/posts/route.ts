import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { connect } from "@/utils/db";

interface Post {
  id: number;
  title: string;
  content: string;
}

export const GET = async (request: NextApiRequest) => {
  try {
    await connect();
    const posts: Post[] = await Post.find();
    const postsString = JSON.stringify(posts);
    return new NextResponse(postsString, { status: 200 });
  } catch (error) {
    return new NextResponse("database error", { status: 500 });
  }
};
