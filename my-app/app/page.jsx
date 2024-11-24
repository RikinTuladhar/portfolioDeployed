"use client";
import Sidebar from "@/components/Sidebar";
import { Nfc } from "lucide-react";
import { UserRound } from "lucide-react";
import React, { useEffect } from "react";
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
import CardShow from "@/components/Card/CardShow";
import Techstack from "@/components/Card/Techstack";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleMobileView } from "@/redux/mobileView";
import MobileSideBar from "@/components/MobileSideBar";
export default function Home() {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const mobileView = useSelector((s) => s?.mobileView.mobileView);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    dispatch(handleMobileView(windowWidth <= 500));
  }, [windowWidth, dispatch]);

  console.log("This si mobile view", mobileView);

  const techstack = [
    {
      id: 1,
      name: "React Js",
      description: "This is react js",
      image: "/techstack/react.png",
    },
    {
      id: 2,
      name: "Next Js",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
    {
      id: 3,
      name: "Spring Boot",
      description: "This is spring boot",
      image: "/techstack/spring.png",
    },
    {
      id: 4,
      name: "Tailwind",
      description: "This is tailwind",
      image: "/techstack/tailwind.png",
    },
    {
      id: 5,
      name: "TypeScript",
      description: "This is type script",
      image: "/techstack/typescript.webp",
    },
    {
      id: 5,
      name: "Javascript",
      description: "This is type script",
      image: "/techstack/js.webp",
    },
    {
      id: 5,
      name: "Java",
      description: "This is type script",
      image: "/techstack/java.jfif",
    },
    {
      id: 5,
      name: "Firebase",
      description: "This is type script",
      image: "/techstack/firebase.png",
    },
  ];
  return (
    <>
      <div
        className={`w-full ${
          mobileView ? "block" : " flex"
        }  relative bg-black min-h-[100vh] text-color`}
      >
        {/* sidebar  */}
        {!mobileView && <Sidebar />}

        <div className=" w-full relative md:w-[80%]  py-0 md:py-5">
          {introduction()}
          {RecentProjects()}
          {techstacks(techstack)}
        </div>

        {mobileView && <MobileSideBar />}
      </div>
    </>
  );
}
function techstacks(techstack) {
  return (
    <div className="px-5 mt-20 md:px-20">
      <h2 className="text-xl ">Tech Stacks</h2>
      <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
        {techstack.map((tech, i) => (
          <Techstack
            name={tech.name}
            image={tech.image}
            description={tech.description}
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Link href={"/techstacks"}>
          <Button>View More</Button>
        </Link>
      </div>
    </div>
  );
}

function RecentProjects() {
  return (
    <div className="px-5 md:px-20">
      <h2 className="text-xl ">Recent Projects</h2>
      <div className="grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2 place-items-center">
        <CardShow />
        <CardShow />
        <CardShow />
        <CardShow />
      </div>
      <div className="flex items-center justify-center w-full py-2 ">
        <Link href={"/projects"}>
          {" "}
          <Button>View More</Button>
        </Link>
      </div>
    </div>
  );
}

function introduction() {
  return (
    <div className="w-full md:w-[80%] px-5 md:px-20 py-5 ">
      <div className="w-full py-10 space-y-3 ">
        <h1 className="text-4xl md:text-5xl">Rikin Tuladhar</h1>
        <h1 className="text-4xl md:text-5xl">
          Welcome To <span className="text-primary">My Digital World</span>
        </h1>
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
        </div>
      </div>
    </div>
  );
}
