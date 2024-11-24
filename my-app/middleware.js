import { cookies } from "next/headers";
import { decrypt } from "./lib/session";
import { NextResponse } from "next/server";


const protectedRoutes = ["/admin"];
const publicRoutes = ["/","/about","/login","/projects","/techstacks"]

export default async function middleware(req) {
    const path = req.nextUrl.pathname; 
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if(isProtectedRoute && !session?.email){
        return NextResponse.redirect(new URL("/login",req.nextUrl))
    }

    if(isPublicRoute && session?.email){
        return NextResponse.redirect(new URL("/admin",req.nextUrl))
    }

    return NextResponse.next();

}