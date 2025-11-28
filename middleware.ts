import { auth } from "@/auth";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(
      new URL("/api/auth/signin", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/((?!api/|_next/|-/|favicon.ico|sc_logo.svg).*)',
  ],
};
