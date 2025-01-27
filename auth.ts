import NextAuth from "next-auth"
import Credentials from "@auth/core/providers/credentials";
import {findUserByCredentials} from "@/lib/user";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                return await findUserByCredentials(credentials.email, credentials.password);
            }
        })],
})