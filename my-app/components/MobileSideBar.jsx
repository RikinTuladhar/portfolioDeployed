import {
  ChevronsLeftRightEllipsis,
  FolderGit2,
  Github,
  Info,
  Linkedin,
  Mail,
  Telescope,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MobileSideBar = () => {
  return (
    <div className=" h-[4rem] gap-5 px-10 pl-32 flex mt-10 py-10 justify-center items-center overflow-x-auto sticky border border-spacing-2 bottom-0 bg-black">
      <Link
        href={"/"}
        className="flex ml-72 flex-col px-3  justify-center items-center"
      >
        {" "}
        <span>
          <Telescope />
        </span>
        <span className=" font-bold ">Expore</span>
      </Link>
      <Link
        href={"/projects"}
        className="flex px-3  flex-col  justify-center items-center"
      >
        {" "}
        <FolderGit2 /> <span className=" font-bold ">Projects</span>{" "}
      </Link>
      <Link
        href={"/techstacks"}
        className="flex px-3  flex-col  justify-center items-center"
      >
        {" "}
        <ChevronsLeftRightEllipsis /> <span className=" font-bold "> TechStack </span>
      </Link>
      <Link
        href={"/about"}
        className="flex px-3  flex-col  justify-center items-center"
      >
        {" "}
        <Info /> <span className=" font-bold ">About</span>
      </Link>
      <a
        href={"https://github.com/RikinTuladhar"}
        className="flex px-3   flex-col  justify-center items-center"
      >
        {" "}
        <Github /> <span className=" font-bold ">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/rikin-tuladhar-0757a7228/"
        className="flex  px-3  flex-col  justify-center items-center"
      >
        {" "}
        <Linkedin />
        <span className=" font-bold ">LinkedIn</span>
      </a>
      <a
        target="_blank"
        href="mailto:rikin.tuladhar@gmail.com"
        className="flex flex-col items-center cursor-pointer gap-x-3"
      >
        <Mail />

        <span className=" font-bold ">Send</span>
      </a>
    </div>
  );
};

export default MobileSideBar;
