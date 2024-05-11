import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// const urlRoleCanAccess: {
//   startPath: string;
//   role: Role[];
//   position?: Position[];
// }[] = [
//   {
//     startPath: "/STUDENT",
//     role: ["STUDENT"],
//   },
//   {
//     startPath: "/SAB",
//     role: ["SAB"],
//   },
// ];

export default withAuth(
  async function middleware(req) {
    const { token } = req.nextauth;
    // const role = req.nextauth.token?.role;
    // if ()
    // for (const url of urlRoleCanAccess) {
    //   if (req.nextUrl.pathname.startsWith(url.startPath)) {
    //     if (token?.role && url.role.includes(token.role)) {
    //       if (url.position) {
    //         if (url.position?.length > 0) {
    //           if (token?.position && url.position.includes(token.position)) {
    //             return NextResponse.next();
    //           } else {
    //             return NextResponse.redirect(
    //               new URL(
    //                 `/error?error=${encodeURIComponent("คุณไม่มีสิทธิ์ในการเข้าถึง")}`,
    //                 req.url,
    //               ),
    //             );
    //           }
    //         } else {
    //           return NextResponse.next();
    //         }
    //       } else {
    //         return NextResponse.next();
    //       }
    //     }
    //   }
    // }

    // return NextResponse.redirect(new URL("/404", req.url));
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (token) {
          return true;
        }
        return false;
      },
    },
  },
);

export const config = {
  matcher: [
    // "/STUDENT",
    // "/SAB",
  ],
};