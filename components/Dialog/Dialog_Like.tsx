"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiHeart } from "react-icons/ci";
import Like_Post from "@/app/feed_post/Like_Post";

export function DialogLike() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <CiHeart className="w-7 h-7" />
        </button>
      </DialogTrigger>
      {/* 
        * sm:max-w-[100vh] กว้าง
        * sm:max-h-[80vh ยาว
        * overflow-y-auto scroll ขึ้นลง
      */}
      <DialogContent className="sm:max-w-[100vh] sm:max-h-[80vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle>POST YOUR LIKE</DialogTitle>
        </DialogHeader>
        {/* LikePost */}
        <Like_Post />
      </DialogContent>
    </Dialog>
  );
}
