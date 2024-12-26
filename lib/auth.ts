import NextAuth from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

 const hanler = NextAuth(authOptions)

 export {hanler as GET, hanler as POST};