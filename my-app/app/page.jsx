"use client";
import Sidebar from "@/component/Sidebar";
import { Nfc } from "lucide-react";
import { UserRound } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Telescope } from "lucide-react";
import { FolderGit2 } from "lucide-react";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import { Info } from "lucide-react";
import { Contact } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex  min-h-[100vh] text-color">
      {/* sidebar  */}
      <div
        className={`${
          show ? "w-auto" : "w-auto"
        }  xl::w-[10%]  text-color px-5 pb-10 pt-5 h-[100vh]  bg-sidebar`}
      >
        <div className="relative w-full">
          {" "}
          <div
            onClick={(e) => setShow(!show)}
            className={`absolute ${!show ? "right-2" : "right-1"} `}
          >
            {" "}
            {show ? <ChevronRight /> : <ChevronLeft />}
          </div>
        </div>
        <div>
          <h5 className={`py-2 font-bold ${show ? "mt-5" : "mt-0"} `}>Menu</h5>
          {!show ? (
            <div className="px-5 py-2 space-y-4">
              <p className="flex items-center cursor-pointer gap-x-3">
                {" "}
                <Telescope /> <span>Explore</span>
              </p>
              <p className="flex items-center gap-x-3">
                {" "}
                <FolderGit2 /> <span>Project</span>{" "}
              </p>
              <p className="flex items-center gap-x-3">
                <ChevronsLeftRightEllipsis /> <span> Tech Stack</span>
              </p>
              <p className="flex items-center gap-x-3">
                <Info /> <span>About</span>
              </p>
              <p className="flex items-center gap-x-3">
                {" "}
                <Contact />
                <span>Contact</span>
              </p>
            </div>
          ) : (
            <div className="pl-4 space-y-4">
              <div>
                {" "}
                <Telescope />{" "}
              </div>
              <div>
                {" "}
                <FolderGit2 />{" "}
              </div>
              <div>
                {" "}
                <ChevronsLeftRightEllipsis />
              </div>
              <div>
                {" "}
                <Info />
              </div>
              <div>
                {" "}
                <Contact />
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-[1px] my-4 bg-color"></div>
        <div>
          <h5 className="py-2 font-bold">Connect</h5>
          {!show ? (
            <div className="px-5 py-2 space-y-4">
              <p className="flex items-center cursor-pointer gap-x-3">
                {" "}
                <Github /> <span>Github</span>
              </p>
              <p className="flex items-center cursor-pointer gap-x-3">
                <Linkedin />
                <span>Linkedin</span>
              </p>
            </div>
          ) : (
            <div className="pl-4 space-y-4">
              <div>
                {" "}
                <Github />
              </div>
              <div>
                {" "}
                <Linkedin />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[80%] px-20 py-5 ">
        <div className="w-full py-10 space-y-3 ">
          <h1 className="text-5xl">Rikin Tuladhar</h1>
          <h1 className="text-5xl">Welcome To <span className="text-primary">My Digital World</span></h1>
          <p>Designing and Crafting the Web</p>
          <p>
            I am an energetic and enthuastic computer scinece student with a
            string desire to learn and train with professional in UI/UX and
            Frontend development
          </p>
          <div className="flex w-full space-x-5">
            <button className="flex  gap-1 justify-center items-center bg-[#EDEDED] rounded-md text-sm  text-black py-2 px-5">
              <Nfc size={20} />
              <span> Contact Me</span>
            </button>
            <button className="bg-[#111111] text-white flex  gap-1  justify-center items-center  rounded-md  text-sm py-2 px-5">
              <UserRound size={20} />
              <span>About</span>
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
