import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const token = req.nextauth.token;
    const url = req.nextUrl;

    // Redirect admins from client pages to their dashboard
    if (token?.role === "admin" && url.pathname.startsWith("/home")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Redirect clients from admin pages to the client homepage
    if (token?.role === "client" && url.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/home", req.url));
    }

    // Allow the request to proceed if no redirection is needed
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // A token must exist to access any page
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home', '/home/:path*', '/admin', '/admin/:path*'],
};
