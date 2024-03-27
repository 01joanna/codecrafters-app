

'use server'
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    const authTokens = cookies(request).get('authTokens')?.value;

    if (request.nextUrl.pathname.startsWith("/auth") && !authTokens) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete('authTokens');
        return response;
    }
    
    // Agregar el token de autenticación a las solicitudes protegidas
    if (authTokens && request.nextUrl.pathname.startsWith("/api")) {
        request.headers.set('Authorization', `Bearer ${authTokens}`);
    }

    return null;
}
    
export const config = {
    matcher: ["/auth/:path*", "/login", "/register"],
}

// //src/middleware/middleware.js

// 'use server'
// import { cookies } from 'next/headers';
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request) {
//     const authTokens = cookies(request).get('authTokens')?.value;

//     if (request.nextUrl.pathname.startsWith("/auth") && !authTokens) {
//         const response = NextResponse.redirect(new URL("/login", request.url));
//         response.cookies.delete('authTokens');
//         return response;
//     }
    
//     if (authTokens && request.nextUrl.pathname.startsWith("/login")) {
//         return NextResponse.redirect(new URL("/auth/dashboard", request.url));
//     }
//     if (authTokens && request.nextUrl.pathname.startsWith("/register")) {
//         return NextResponse.redirect(new URL("/auth/dashboard", request.url));
//     }

//     return null;
// }
    
//     export const config = {
//         matcher: ["/auth/:path*", "/login", "/register"],



//     }






// // import { NextResponse } from "next/server";

// // import csrf from "./csrf";

// // export default async function middleware() {
// //     // Ejecuta el middleware CSRF para generar y exponer el token CSRF
// //     await csrf(req, res);

// //     // retrieve the current response
// //     const res = NextResponse.next()

// //     // add the CORS headers to the response
// //     res.headers.append('Access-Control-Allow-Credentials', "true")
// //     res.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/'), 
// //     res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
// //     res.headers.append(
// //         'Access-Control-Allow-Headers',
// //         'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
// //     )

// //     return res
// // }

// // export const config = {
// //     matcher: '/api/:path*',
// // }