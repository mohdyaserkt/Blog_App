import User from "@/models/User";
import { connect } from "@/utils/db";
import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return new NextResponse(err.message, {
        status: 500,
      });
    } else {
      return new NextResponse("An error occurred", {
        status: 500,
      });
    }
  }
  
};
