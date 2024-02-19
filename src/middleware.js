import { NextResponse } from "next/server";
export default function middleware(request){
    return NextResponse.redirect(new URL("/login",request.url))
}

export const config = {
    matcher: "/profile"
}