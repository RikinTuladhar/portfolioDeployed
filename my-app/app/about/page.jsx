'use client'
import Sidebar from "@/components/Sidebar";
import Container from "@/layout/Container";
import React, { useEffect, useState } from "react";
import Techstack from "@/components/Card/Techstack";
import { handleMobileView } from "@/redux/mobileView";
import { useDispatch, useSelector } from "react-redux";
import MobileSideBar from "@/components/MobileSideBar";
const page = () => {
  const techstack = [
    {
      id: 1,
      name: "Dota 2",
      description: "",
      image: "/games/dota2.png",
    },
    {
      id: 2,
      name: "Apex Legend",
      description: "",
      image: "/games/apex.png",
    },
    {
      id: 3,
      name: "Valorant",
      description: "",
      image: "/games/valorant.png",
    },
    {
      id: 4,
      name: "Counter-Strike: Global Offensive",
      description: "",
      image: "/games/csgo.png",
    },
    {
      id: 5,
      name: "Mobile Legend",
      description: "",
      image: "/games/ml.png",
    },
    {
      id: 5,
      name: "Pokemon Go",
      description: "",
      image: "/games/pokemongo.png",
    },
    {
      id: 5,
      name: "Tekken 7",
      description: "",
      image: "/games/tekken.jfif",
    },
    {
      id: 5,
      name: "NBA 2k24",
      description: "",
      image: "/games/nba.png",
    },
  ];

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
    <div className={`w-full ${mobileView ? "block" : "flex"}  relative bg-black min-h-[100vh] text-color`}>
    { !mobileView &&  <Sidebar />}
      <Container>{introduction(techstack)}</Container>
      {mobileView && <MobileSideBar/>}
    </div>
  );
};

export default page;
function introduction(techstack) {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl">My Story.</h1>
        <p>Creative frontend developer, UI Designer and Backend Developer.</p>
      </div>
      <div className="py-10">
        <div className="w-full py-5 space-y-4 md:py-6 ">
          <h2 className="text-3xl">Quick Introduction</h2>
          <p className="font-sans text-justify">
            Hello, my name is Rikin Tuladhar. I am a passionate full-stack
            developer, continuously expanding my skills from frontend to backend
            to become a well-rounded developer.
          </p>
          <p className="font-sans text-justify">
            I enjoy creating projects that are both engaging and
            problem-solving, and I'm always striving to improve and push my
            abilities beyond what they were yesterday. In my free time, I love
            playing games, listening to music, and watching programming videos
            that broaden my knowledge.
          </p>
          <p className="font-sans text-justify">
            {" "}
            My journey as a developer is all about growth, learning, and the
            excitement of building innovative solutions.
          </p>
        </div>

        <div className="w-full my-5 h-[0.20rem] bg-white"></div>
      </div>
      {education()}
      <div className="w-full my-5 h-[0.20rem] bg-white"></div>
      {gamesIntro(techstack)}
    </>
  );
}

function education() {
  return (
    <>
      <h2 className="text-3xl">Education</h2>
      <div className="w-full py-2 space-y-4 md:py-7 ">
        <div className="space-y-2">
          <p className="text-xl"># Baclelors Of Computer Application (BCA)</p>

          <ul className="px-10 space-y-4 font-sans text-justify list-disc">
            <li>
              {" "}
              I am currently studying BCA at Kathmandu Business Campus, located
              in Banasthali, Kathmandu, where I maintain an average grade of
              3.5.
            </li>
            <li>
              The program offers a wide range of courses that are helping me
              build a strong foundation in the IT field, enhancing my skills and
              knowledge in various aspects of technology.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xl"># +2</p>

          <ul className="px-10 space-y-4 font-sans text-justify list-disc">
            <li>
              {" "}
              I completed my +2 education at Samriddhi College, located in
              Banasthali, where I focused on Computer Science and Business
              Studies.
            </li>
            <li>
              My hard work and dedication paid off, as I achieved a commendable
              GPA of 3.20.{" "}
            </li>
            <li>
              {" "}
              This experience provided me with a solid foundation in both
              technical and business disciplines, preparing me for future
              academic and professional pursuits.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xl"># SEE</p>

          <ul className="px-10 space-y-4 font-sans text-justify list-disc">
            <li>
              {" "}
              I completed my SEE at Bernhardt MTI School, located in Tahachal,
              Kathmandu, where I achieved a GPA of 3.25.
            </li>
            <li>
              This experience was crucial in shaping my academic foundation and
              preparing me for future educational endeavors.
            </li>
            <li>
              {" "}
              The supportive environment and dedicated faculty at Bernhardt MTI
              played a significant role in my success.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function gamesIntro(techstack) {
  return (
    <div className="py-6">
      <h2 className="text-3xl">Games that I have played</h2>
      <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
        {techstack?.map((tech, i) => (
          <Techstack
            name={tech.name}
            image={tech.image}
            description={tech.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
