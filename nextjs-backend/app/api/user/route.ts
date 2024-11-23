import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    console.log(req.headers.get("Authorization"));
    console.log(req.nextUrl.searchParams.get("name"));
    await client.user.create({
      data: {
        email: username,
        password,
      },
    });
    return NextResponse.json({
      message: "You are logged in!",
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      {
        status: 411,
      }
    );
  }
}
