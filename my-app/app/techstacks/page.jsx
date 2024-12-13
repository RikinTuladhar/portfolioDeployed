"use client";
import Sidebar from "@/components/Sidebar";
import Container from "@/layout/Container";
import React, { useEffect, useState } from "react";
import Techstack from "@/components/Card/Techstack";
import { useDispatch, useSelector } from "react-redux";
import { handleMobileView } from "@/redux/mobileView";
import MobileSideBar from "@/components/MobileSideBar";
import techstackApi from "../api/techstack/techstackApi";
import LoadTechStack from "@/components/Card/LoadTechStack";

const page = () => {
  const { getTechStacks } = techstackApi();
  const [tech, setTech] = useState([]);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const mobileView = useSelector((s) => s?.mobileView.mobileView);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    getTechStacks()
      .then((res) => {
        setTech(res);
      })
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <div
      className={`w-full ${
        mobileView ? "block" : "flex"
      } relative bg-black min-h-[100vh] text-color`}
    >
      {!mobileView && <Sidebar />}
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl">Tech Stacks.</h1>
          <p>I've honed my skills across several tech stacks</p>
        </div>
        <div className="py-10">
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Front-End</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {tech.length > 0
              ? tech
                  .filter((i) => i.category == "Front-End")
                  .map((tech, i) => (
                    <Techstack
                      name={tech.title}
                      image={tech.image}
                      description={tech.description}
                      key={i}
                    />
                  ))
              : Array.from({ length: 4 }).map((_, i) => (
                  <LoadTechStack key={i} />
                ))}
          </div>
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Back-End</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {tech.length > 0
              ? tech
                  .filter((i) => i.category == "Back-End")
                  .map((tech, i) => (
                    <Techstack
                      name={tech.title}
                      image={tech.image}
                      description={tech.description}
                      key={i}
                    />
                  ))
              : Array.from({ length: 4 }).map((_, i) => (
                  <LoadTechStack key={i} />
                ))}
          </div>
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Database</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {tech.length > 0
              ? tech
                  .filter((i) => i.category == "Database")
                  .map((tech, i) => (
                    <Techstack
                      name={tech.title}
                      image={tech.image}
                      description={tech.description}
                      key={i}
                    />
                  ))
              : Array.from({ length: 4 }).map((_, i) => (
                  <LoadTechStack key={i} />
                ))}
          </div>
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
        </div>
      </Container>
      {mobileView && <MobileSideBar />}
    </div>
  );
};

export default page;
