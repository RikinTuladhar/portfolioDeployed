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
import projectApi from "./api/projects/projectsApi";
import techstackApi from "./api/techstack/techstackApi";
import LoadCardShow from "@/components/Card/LoadCardShow";
import LoadTechStack from "@/components/Card/LoadTechStack";
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
          {techstacks()}
        </div>
        {mobileView && <MobileSideBar />}
      </div>
    </>
  );
}
function techstacks(techstack) {
  const [techStack, setTechStack] = useState([]);
  const { getTechStacks } = techstackApi();
  useEffect(() => {
    getTechStacks()
      .then((res) => {
        console.log(res);
        setTechStack(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-5 mt-20 md:px-20">
      <h2 className="text-xl font-semibold ">Tech Stacks</h2>
      <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
        {techStack.length > 0
          ? techStack.map((tech, i) => (
              <Techstack
                name={tech.title}
                image={tech.image}
                description={tech.description}
                key={i}
              />
            ))
          : Array.from({ length: 4 }).map((_, i) => <LoadTechStack key={i} />)}
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
  const { getProjects } = projectApi();
  const array = [1, 2, 3, 4];
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-5 md:px-20">
      <h2 className="text-xl font-semibold">Recent Projects</h2>
      <div className="grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2 place-items-center">
        {projects.length > 0
          ? projects.map((project, i) => <CardShow project={project} key={i} />)
          : Array.from({ length: 6 })?.map((_, i) => (
              <div key={i}>
                <LoadCardShow />
              </div>
            ))}
      </div>
      <div className="flex items-center justify-center w-full py-2 ">
        <Link href={"/projects"}>
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
            <Link href={"/about"}> Contact Me</Link>
          </button>
          <button className="bg-[#111111] text-white flex  gap-1  justify-center items-center  rounded-md  text-sm py-2 px-5">
            <UserRound size={20} />
            <Link href={"/about"}>About</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
