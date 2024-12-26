import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiChat1 } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { DialogDemo } from "@/components/Dialog/Dialog_Post";
import { DialogLike } from "../Dialog/Dialog_Like";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SignIn from "@/app/signin/signin";

export default async function SideBar(){
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="contain fixed flex flex-col px-4 bg-white ">
    {session ? (
    <div className="flex gap-3 justify-between md:justify-normal items-center pt-5 cursor-pointer ">
    <Link href={"/profle"}>
      <Image
        src={session.user?.image as string}
        alt={session.user?.image as string}
        width={40}
        height={40}
        className="rounded-full object-cover"
      /> 
    </Link>
    <p className="text-sm not-sr-only">{session.user?.name}</p>
    </div>
    ): (
      <SignIn />
    )}
        <div className="flex flex-col ">
          {/* Post link */}
          <div className="flex mt-4 gap-2 items-center hover:bg-gray-300 rounded-xl px-3 py-1">
            <DialogDemo /> {/* Dialog to create a post */}
            <span>Post</span> {/* Post text */}
          </div>

          {/* Like link */}
          <div className="flex mt-4 gap-2 items-center  hover:bg-gray-300 rounded-xl px-3 py-1">
            <DialogLike /> {/* Dialog to see like post */}
            <span>Like</span> {/* Like text */}
          </div>

          {/* Chat link */}
          <Link
            href={"/chat"}
            className="flex mt-4 gap-2 items-center  hover:bg-gray-300 rounded-xl px-3 py-1"
          >
            <CiChat1 className="w-7 h-7" /> {/* Chat icon */}
            <span>Chat</span> {/* Chat text */}
          </Link>

          {/* Friends link */}
          <Link
            href={"/friend"}
            className="flex mt-4 gap-2 items-center  hover:bg-gray-300 rounded-xl px-3 py-1"
          >
            <LiaUserFriendsSolid className="w-7 h-7" /> {/* Friends icon */}
            <span>Friend</span> {/* Friend text */}
          </Link>
        </div>
      </div>
    </>
  );
};

