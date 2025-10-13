import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      id: "google-client",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GoogleProvider({
      id: "google-admin",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account }) {
      // On initial sign-in, persist the user role based on the provider
      if (account) {
        token.role = account.provider === 'google-admin' ? 'admin' : 'client';
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the role from the JWT to the session object
      session.user.role = token.role;
      return session;
    },
  },
};

