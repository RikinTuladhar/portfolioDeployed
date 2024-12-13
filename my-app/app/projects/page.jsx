"use client";
import CardShow from "@/components/Card/CardShow";
import MobileSideBar from "@/components/MobileSideBar";
import Sidebar from "@/components/Sidebar";
import Container from "@/layout/Container";
import { handleMobileView } from "@/redux/mobileView";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import projectApi from "../api/projects/projectsApi";
import LoadCardShow from "@/components/Card/LoadCardShow";

const page = () => {
  const array = [1, 2, 3, 4];
  const { getProjects } = projectApi();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
  return (
    <div
      className={`w-full ${
        mobileView ? " block" : " flex"
      }  relative bg-black min-h-[100vh] text-color`}
    >
      {!mobileView && <Sidebar />}
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl">Showcase Work.</h1>
          <p>I design and code interface that fascinate users.</p>
        </div>
        <div className="py-10">
          <h2 className="text-3xl">Some of my projects</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {projects && projects.length > 0
              ? projects.map((project, i) => (
                  <CardShow project={project} key={i} />
                ))
              : array.map((_, i) => (
                  <span key={i}>
                    <LoadCardShow key={i} />
                  </span>
                ))}
          </div>
        </div>
      </Container>
      {mobileView && <MobileSideBar />}
    </div>
  );
};

export default page;
