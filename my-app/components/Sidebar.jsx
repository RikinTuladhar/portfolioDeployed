"use client";
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
import CardShow from "@/components/Card/CardShow";
import Techstack from "@/components/Card/Techstack";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${
        show ? "w-auto" : "w-auto"
      }    text-color px-5  pb-10 pt-5 top-0 sticky h-[100vh]  bg-sidebar`}
    >
      <div className="relative w-full">
        {" "}
        <div
          onClick={(e) => setShow(!show)}
          className={`absolute ${!show ? "right-2" : "right-1"} `}
        >
          {" "}
          {/* {show ? <ChevronRight /> : <ChevronLeft />} */}
        </div>
      </div>
      <div>
        <h5 className={`py-2 font-bold ${show ? "mt-5" : "mt-0"} `}>Menu</h5>
        {!show ? (
          <div className="px-5 py-2 space-y-4">
            <Link
              href={"/"}
              className="flex items-center cursor-pointer gap-x-3"
            >
              {" "}
              <Telescope /> <span>Explore</span>
            </Link>
            <Link
              href={"/projects"}
              className="flex items-center cursor-pointer gap-x-3"
            >
              {" "}
              <FolderGit2 /> <span>Project</span>{" "}
            </Link>
            <Link
              href={"/techstacks"}
              className="flex items-center cursor-pointer gap-x-3"
            >
              <ChevronsLeftRightEllipsis /> <span> Tech Stack</span>
            </Link>
            <Link
              href={"/about"}
              className="flex items-center cursor-pointer gap-x-3"
            >
              <Info /> <span>About</span>
            </Link>
            {/* <Link
              href={"/contacts"}
              className="flex items-center cursor-pointer gap-x-3"
            >
              {" "}
              <Contact />
              <span>Contact</span>
            </Link> */}
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
            {/* <div>
              {" "}
              <Contact />
            </div> */}
          </div>
        )}
      </div>
      <div className="w-full h-[1px] my-4 bg-color"></div>
      <div>
        <h5 className="py-2 font-bold">Connect</h5>
        {!show ? (
          <div className="px-5 py-2 space-y-4">
            <a
              target="_blank"
              href={"https://github.com/RikinTuladhar"}
              className="flex items-center cursor-pointer gap-x-3"
            >
              {" "}
              <Github /> <span>Github</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rikin-tuladhar-0757a7228/"
              className="flex items-center cursor-pointer gap-x-3"
            >
              <Linkedin />
              <span>Linkedin</span>
            </a>
            <a
              target="_blank"
              href="mailto:rikin.tuladhar@gmail.com"
              className="flex items-center cursor-pointer gap-x-3"
            >
              <Mail />

              <span>Send Mail</span>
            </a>
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
            <div>
              {" "}
              <Mail />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
