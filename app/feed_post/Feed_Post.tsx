"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { DialogShare } from "@/components/Dialog/ShareDialog";
import { CiHeart, CiEdit } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";
import { IoTrashBinOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

const Feed_Post = () => {
  // useRef สำหรับการอ้างอิง Input ที่จะโฟกัส
  const targetRef = useRef<HTMLInputElement | null>(null);

  // ฟังก์ชั่นสำหรับโฟกัสไปที่ช่อง comment input
  const handleCommentClick = () => {
    if (targetRef.current) {
      targetRef.current.focus(); // โฟกัสช่อง comment
    } else {
      console.error("Input reference is null.");
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-5">
        {/* map */}
        {/* Container สำหรับ Feed Post */}
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md max-w-6xl mx-auto md:max-w-3xl mt-2 ">
          {/* Top Section: แสดงโปรไฟล์และข้อมูล */}
          <div className="px-4 py-3  items-center gap-3 ">
            <div className="flex justify-between">
              <div className="items-center">
                {/* Click to Prifile */}
                <Link href={"/profile"} className="flex gap-2 items-center">
                  <Image
                    src={"/asset/js.png"}
                    alt="profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="text-sm font-semibold ">John Doe</p>
                </Link>
                <p className="text-xs text-gray-500 -mt-2 ml-11 ">
                  Create: 12/12/20
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex  gap-4">
                  <button onClick={() => {}}>
                    <CiEdit className="h-5 w-5" />
                  </button>
                  <button onClick={() => {}}>
                    <IoTrashBinOutline className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section: แสดงรูปภาพของโพสต์ */}
          <div className="flex px-4">
            {/* Click to detail post */}
            <Link href={"/feedpost_details"}>
              {/* post text */}
              <p className="text-sm">
                Penguins are a group of aquatic flightless birds from the family
                Spheniscidae of the order Sphenisciformes.
                <span className="text-blue-400 underline">tag</span>
              </p>
            </Link>
          </div>
          <div className="w-full flex justify-center mt-2">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>

          {/* Bottom Section: ปุ่มที่เกี่ยวกับการถูกใจและแสดงความคิดเห็น */}
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex gap-4">
              <button onClick={() => {}}>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button onClick={handleCommentClick}>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <button onClick={() => {}}>
              <DialogShare />
            </button>
          </div>

          {/* Input สำหรับพิมพ์คอมเมนต์ */}
          <div className="px-4 py-3 border-t border-gray-200">
            <Input
              ref={targetRef}
              className="w-full outline-none px-3 py-2 border rounded-lg"
              placeholder="Write a comment..."
            />
          </div>
        </div>

        {/* test */}
        {/* Container สำหรับ Feed Post */}
        {/* Container สำหรับ Feed Post */}
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md max-w-6xl md:max-w-3xl -5 mx-auto mt-2">
          {/* Top Section: แสดงโปรไฟล์และข้อมูล */}
          <div className="px-4 py-3 flex items-center gap-3">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-gray-500">Create: 12/12/20</p>
            </div>
          </div>

          {/* Middle Section: แสดงรูปภาพของโพสต์ */}
          <div className="flex px-4">
            {/* post text */}
            <p className="text-sm">
              Penguins are a group of aquatic flightless birds from the family
              Spheniscidae of the order Sphenisciformes.
            </p>
          </div>
          <div className="w-full flex justify-center mt-2">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>

          {/* Bottom Section: ปุ่มที่เกี่ยวกับการถูกใจและแสดงความคิดเห็น */}
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex gap-4">
              <button onClick={() => {}}>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button onClick={handleCommentClick}>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <button onClick={() => {}}>
              <DialogShare />
            </button>
          </div>

          {/* Input สำหรับพิมพ์คอมเมนต์ */}
          <div className="px-4 py-3 border-t border-gray-200">
            <Input
              ref={targetRef}
              className="w-full outline-none px-3 py-2 border rounded-lg"
              placeholder="Write a comment..."
            />
          </div>
        </div>
        {/* Container สำหรับ Feed Post */}
        {/* Container สำหรับ Feed Post */}
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md max-w-6xl md:max-w-3xl -5 mx-auto mt-2">
          {/* Top Section: แสดงโปรไฟล์และข้อมูล */}
          <div className="px-4 py-3 flex items-center gap-3">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-gray-500">Create: 12/12/20</p>
            </div>
          </div>

          {/* Middle Section: แสดงรูปภาพของโพสต์ */}
          <div className="flex px-4">
            {/* post text */}
            <p className="text-sm">
              Penguins are a group of aquatic flightless birds from the family
              Spheniscidae of the order Sphenisciformes.
            </p>
          </div>
          <div className="w-full flex justify-center mt-2">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>

          {/* Bottom Section: ปุ่มที่เกี่ยวกับการถูกใจและแสดงความคิดเห็น */}
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex gap-4">
              <button onClick={() => {}}>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button onClick={handleCommentClick}>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <button onClick={() => {}}>
              <DialogShare />
            </button>
          </div>

          {/* Input สำหรับพิมพ์คอมเมนต์ */}
          <div className="px-4 py-3 border-t border-gray-200">
            <Input
              ref={targetRef}
              className="w-full outline-none px-3 py-2 border rounded-lg"
              placeholder="Write a comment..."
            />
          </div>
        </div>
        {/* Container สำหรับ Feed Post */}
        {/* Container สำหรับ Feed Post */}
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md max-w-6xl md:max-w-3xl -5 mx-auto mt-2">
          {/* Top Section: แสดงโปรไฟล์และข้อมูล */}
          <div className="px-4 py-3 flex items-center gap-3">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-gray-500">Create: 12/12/20</p>
            </div>
          </div>

          {/* Middle Section: แสดงรูปภาพของโพสต์ */}
          <div className="flex px-4">
            {/* post text */}
            <p className="text-sm">
              Penguins are a group of aquatic flightless birds from the family
              Spheniscidae of the order Sphenisciformes.
            </p>
          </div>
          <div className="w-full flex justify-center mt-2">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>

          {/* Bottom Section: ปุ่มที่เกี่ยวกับการถูกใจและแสดงความคิดเห็น */}
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex gap-4">
              <button onClick={() => {}}>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button onClick={handleCommentClick}>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <button onClick={() => {}}>
              <DialogShare />
            </button>
          </div>

          {/* Input สำหรับพิมพ์คอมเมนต์ */}
          <div className="px-4 py-3 border-t border-gray-200">
            <Input
              ref={targetRef}
              className="w-full outline-none px-3 py-2 border rounded-lg"
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed_Post;
