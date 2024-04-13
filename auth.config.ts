import bcrypt from "bcrypt";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

//prisma adapter doesnt work on edge thats why this file

import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { db } from "./lib/db";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
    })
  ],
} satisfies NextAuthConfig

