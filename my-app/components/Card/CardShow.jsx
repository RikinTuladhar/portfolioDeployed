"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { date } from "zod";

const CardShow = ({ project }) => {
  const {
    title,
    description,
    image,
    start_date,
    tech_stack,
    github_link,
    website_link,
  } = project;
  return (
    <Card className="w-[15rem]  md:w-[25rem] bg-black text-color">
      <CardHeader>
        <div className="w-full">
          <img src={image} alt="image of product" className="w-full h-full" />
        </div>
        <CardTitle className="py-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center w-full gap-2">
            <div className="flex  flex-col    space-y-1.5">
              <label htmlFor="name">Started Date: </label>
              <p className="text-gray-500 ">{start_date}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework">Tech Stacks</label>
              <div style={{objectFit:"contain"}} className="flex  flex-wrap gap-x-5">
                {tech_stack.map((tech, i) => (
                  <img
                    src={`/techstack/${tech}.png`}
                    className="size-8"
                    alt={tech}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a target="_blank" href={github_link}>
         <Button>View Github</Button>
        </a>
        <a target="_blank" href={website_link}>
         <Button>View Live</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default CardShow;
