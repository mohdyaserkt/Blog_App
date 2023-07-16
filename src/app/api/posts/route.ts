import { NextRequest, NextResponse } from "next/server";

export const getPosts = async (request: NextRequest): Promise<NextResponse> => {
  return new NextResponse("it works!!", { status: 200 });
};

// export const postPosts = async (request: NextRequest): Promise<NextResponse> => {
//   // Handle POST request logic here
// };

// Export other HTTP methods as needed (e.g., putPosts, deletePosts, etc.)
