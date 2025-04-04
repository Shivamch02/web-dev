import next from "next";
import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;

export function middleware(req: NextRequest) {
  reqCount++;
  console.log(`Request count: ${reqCount}`);
  const res = NextResponse.next();

  return res;
}
