import { NextResponse } from "next/server";
import { BASE_URL } from "@/config/Api";

export async function middleware(request) {
  // Get the IP address from the request
  const ip = request.headers.get("x-forwarded-for") || request.ip;
  
  
  if (request.nextUrl.pathname == "/login") {
    let userData = request.cookies.get("userData")?.value;
    if (userData) {
      userData = JSON.parse(userData);
    } else {
      return NextResponse.next();
    }
    if (userData?.token) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (
    request.nextUrl.pathname.includes("/myaccount") ||
    request.nextUrl.pathname.includes("/checkout")
  ) {
    let userData = request.cookies.get("userData")?.value;
    if (userData) {
      userData = JSON.parse(userData);
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (!userData?.token) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      try {
        const res = await fetch(`${BASE_URL}/authenticate`, {
          method: "GET",
          headers: {
            "Authorization": userData?.token,  // Adding Bearer token here
            "Content-Type": "application/json",
            "x-user-ip": ip
          }
        });

        if (res.status == 200) {
          return NextResponse.next();
        } else if(res.status == 403) {
          return NextResponse.redirect(new URL("/403", request.url));
        } else if(res.status == 401) {
          return NextResponse.redirect(new URL("/401", request.url));
        }
      } catch (err) {
        return NextResponse.redirect(new URL("/404", request.url));
      }
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*", "/", "/login"],
};
