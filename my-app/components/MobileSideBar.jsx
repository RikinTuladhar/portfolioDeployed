import { ChevronsLeftRightEllipsis, FolderGit2, Github, Info, Linkedin, Telescope } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileSideBar = () => {
  return (
    <div className=" h-[4rem] px-10 pl-32 flex mt-10 py-10 justify-center items-center overflow-x-auto sticky border border-spacing-2 bottom-0 bg-black">
    <Link href={"/"} className="flex flex-col px-3  justify-center items-center">
      {" "}
      <span>
        <Telescope />
      </span>
      <span className="">Expore</span>
    </Link>
    <Link href={"/projects"} className="flex px-3  flex-col  justify-center items-center">
      {" "}
      <FolderGit2 /> <span>Project</span>{" "}
    </Link>
    <Link href={"/techstacks"} className="flex px-3  flex-col  justify-center items-center">
      {" "}
      <ChevronsLeftRightEllipsis /> <span> Tech </span>
    </Link>
    <Link href={"/about"} className="flex px-3  flex-col  justify-center items-center">
      {" "}
      <Info /> <span>About</span>
    </Link>
    <a    href={"https://github.com/RikinTuladhar"} className="flex px-3   flex-col  justify-center items-center">
      {" "}
      <Github /> <span>Git</span>
    </a>
    <a     href="https://www.linkedin.com/in/rikin-tuladhar-0757a7228/" className="flex  px-3  flex-col  justify-center items-center">
      {" "}
      <Linkedin />
      <span>LinkedIn</span>
    </a>
  </div>
  )
}

export default MobileSideBar
