import SignIn from "@/app/signin/signin";
import SignOut from "@/app/signout/signout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  // เรียกsession
  const session = await getServerSession(authOptions);
  return (
    <div className="flex sticky z-50 top-0 min-h-[5vh] justify-between items-center sm:px-6 lg:px-8 ">
      <div className="flex gap-2">
        <Link href="/">
          <Image src={"/asset/js.png"} alt="LOGO" width={30} height={30} />
        </Link>
        <h2 className="font-extrabold ">SOCIAL APP</h2>
      </div>
      {/* profile */}
      {session ? (
        <div className="flex items-center gap-2">
        <Link href={"/"}>
          <Image
            src={session.user?.image as string}
            alt={session.user?.name as string}
            width={30}
            height={30}
            className="rounded-full object-cover"
          />
        </Link>
        <p className="font-semibold text-sm">{session.user?.name}</p>
        <SignOut />
      </div>
      ): (
        <SignIn />
      )}
    </div>
  );
}
