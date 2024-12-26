'use client'
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      onClick={() => signIn("github")}
      className="px-3 py-3 bg-green-300 hover:bg-green-500 rounded-lg"
    >
      Sign in
    </button>
  );
}
