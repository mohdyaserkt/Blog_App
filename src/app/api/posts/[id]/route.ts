import { NextRequest, NextResponse } from "next/server";
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

export const GET = async (request: NextRequest | Request, { params }: { params: { id: string } }) => {
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

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
