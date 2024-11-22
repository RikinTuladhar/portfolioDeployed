import CardShow from "@/components/Card/CardShow";
import Sidebar from "@/components/Sidebar";
import Container from "@/layout/Container";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex relative bg-black min-h-[100vh] text-color">
      <Sidebar />
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl">Showcase Work.</h1>
          <p>I design and code interface that fascinate users.</p>
        </div>
        <div className="py-10">
          <h2 className="text-3xl">Some of my projects</h2>
          <div className="grid w-full grid-cols-1 gap-5 py-5 md:gap-10 md:py-10 md:grid-cols-2 place-items-center">
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
