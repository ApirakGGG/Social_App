import React from "react";
import Image from "next/image";
import { LiaCommentSolid } from "react-icons/lia";
import { DialogShare } from "../../components/Dialog/ShareDialog";
import { CiHeart } from "react-icons/ci";

const Like_Post = () => {
  return (
    <>
      <div className="container mx-auto px-2 py-2">
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md mx-auto px-2 mt-2">
          {/*  profile */}
          <div className="py-3 flex items-center gap-2">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p className="text-sm">johe fsdfsdf</p>
          </div>
          <p className="text-xs text-gray-500 -mt-5 ml-11 ">Create: 12/12/20</p>
          {/*  post */}
          <div className="mt-2">
            {/* post text */}
            <p className="text-sm">
              Penguins are a group of aquatic flightless birds from the family
              Spheniscidae of the order Sphenisciformes.
            </p>
          </div>
          <div className="mt-2 w-full flex justify-center h-auto max-w-full">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
          {/* buttom */}
          <div className="flex justify-between ">
            <div className="flex gap-2">
              <button>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <DialogShare />
          </div>
        </div>
        {/* test */}
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md mx-auto px-3 py-2 mt-2">
          {/*  profile */}
          <div className="py-3 flex items-center gap-2">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p className="text-sm">johe fsdfsdf</p>
          </div>
          <p className="text-xs text-gray-500 -mt-5 ml-11 ">Create: 12/12/20</p>
          {/*  post */}
          <div className="mt-2">
            {/* post text */}
            <p className="text-sm">
              Penguins are a group of aquatic flightless birds from the family
              Spheniscidae of the order Sphenisciformes.
            </p>
          </div>
          <div className="mt-2 w-full flex justify-center h-auto max-w-full">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
          {/* buttom */}
          <div className="flex justify-between ">
            <div className="flex gap-2">
              <button>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <DialogShare />
          </div>
        </div>
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-md mx-auto px-3 py-2 mt-2">
          {/*  profile */}
          <div className="py-3 flex items-center gap-2">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p className="text-sm">johe fsdfsdf</p>
          </div>
          <p className="text-xs text-gray-500 -mt-5 ml-11 ">Create: 12/12/20</p>
          {/*  post */}
          <div className="mt-2">
            {/* post text */}
            <p className="text-sm">
              Penguins are a group of aquatic flightless birds from the family
              Spheniscidae of the order Sphenisciformes.
            </p>
          </div>
          <div className="mt-2 w-full flex justify-center h-auto max-w-full">
            <Image
              src={"/asset/G.png"}
              alt="post-image"
              width={400}
              height={300}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
          {/* buttom */}
          <div className="flex justify-between ">
            <div className="flex gap-2">
              <button>
                <CiHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
              </button>
              <button>
                <LiaCommentSolid className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
              </button>
            </div>
            <DialogShare />
          </div>
        </div>
      </div>
    </>
  );
};

export default Like_Post;
