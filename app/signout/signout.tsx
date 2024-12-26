"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="px-3 py-3 bg-orange-300 hover:bg-orange-500 rounded-lg"
    >
      Sign out
    </button>
  );
}
