import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export function GET() {
  return Response.json({
    name: "Shivam",
    email: "shivam@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  await client.user.create({
    data: {
      email: username,
      password,
    },
  });
  return Response.json({
    message: "You are logged in!",
  });
}
