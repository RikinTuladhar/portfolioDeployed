import Sidebar from "@/components/Sidebar";
import Container from "@/layout/Container";
import React from "react";
import Techstack from "@/components/Card/Techstack";
const page = () => {
  const frontend = [
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
      name: "Tailwind",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
    {
      id: 4,
      name: "Type Script",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
  ];
  const backend = [
    {
      id: 1,
      name: "Spring Boot",
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
      name: "PHP",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
    {
      id: 4,
      name: "JAVA",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
  ];
  const database = [
    {
      id: 1,
      name: "MySql",
      description: "This is react js",
      image: "/techstack/react.png",
    },
    {
      id: 2,
      name: "Mongo DB",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
  ];
  const other = [
    {
      id: 1,
      name: "Figma",
      description: "This is react js",
      image: "/techstack/react.png",
    },
    {
      id: 2,
      name: "Firebase",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
    {
      id: 3,
      name: "Cap Cut",
      description: "This is next js",
      image: "/techstack/nextjs.png",
    },
    {
        id: 4,
        name: "Adobe Premiere Pro",
        description: "This is next js",
        image: "/techstack/nextjs.png",
      },
  ];
  return (
    <div className="w-full flex relative bg-black min-h-[100vh] text-color">
      <Sidebar />
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl">Tech Stacks.</h1>
          <p>I've honed my skills across several tech stacks</p>
        </div>
        <div className="py-10">
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Front-End</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {frontend.map((tech, i) => (
              <Techstack
                name={tech.name}
                image={tech.image}
                description={tech.description}
                key={i}
              />
            ))}
          </div>
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Back-End</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {backend.map((tech, i) => (
              <Techstack
                name={tech.name}
                image={tech.image}
                description={tech.description}
                key={i}
              />
            ))}
          </div>
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Database</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {database.map((tech, i) => (
              <Techstack
                name={tech.name}
                image={tech.image}
                description={tech.description}
                key={i}
              />
            ))}
          </div>
          <div className="w-full my-5 h-[0.20rem] bg-white"></div>
          <h2 className="text-2xl">Other Techonologies</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            {database.map((tech, i) => (
              <Techstack
                name={tech.name}
                image={tech.image}
                description={tech.description}
                key={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
