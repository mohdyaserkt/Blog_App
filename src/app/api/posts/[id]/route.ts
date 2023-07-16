import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { connect } from "@/utils/db";

interface Post {
  _id: string;
  title: string;
  desc: string;
  content: string;
  username: string;
  img: string;
}

export const GET = async (request: NextApiRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  try {
    await connect();

    const post: Post | null = await Post.findById(id);
    if (post) {
      const postString = JSON.stringify(post);
      return new NextResponse(postString, { status: 200 });
    } else {
      return new NextResponse("Post not found", { status: 404 });
    }
  } catch (error) {
    return new NextResponse("database error", { status: 500 });
  }
};
