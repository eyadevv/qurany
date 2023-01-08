import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (typeof request.cookies.get("auth") !== "undefined") {
    console.log("there is a token");
    return NextResponse.next();
  } else {
    console.log("there is no token , try again");
    return NextResponse.redirect(new URL("/welcome", request.url));
  }
}

export const config = {
  matcher: "/app/:path*",
};
