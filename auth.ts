import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({ token, session }) { //session can be pass easily to client and server side
            if (token.sub && session.user) { //token.sub is being unique id of Neon's database
                session.user.id = token.sub
            };

            if (token.role && session.user) {
                session.user.role = token.role as UserRole; // added custom role variable to session
            };

            // console.log({ sesstionToken: token, session });
            return session;
        },
        async jwt({ token }) { //session fields is coming from jwt's token
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role; // added custom role variable to token

            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})  