"use client";

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
import React from "react";

const LoadCardShow = () => {
  return (
    <Card className="w-[15rem]  md:w-[25rem] bg-black text-color">
      <CardHeader>
        <div className="w-full">
          {" "}
          <div className="flex items-center justify-center h-48 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>{" "}
        </div>
        <CardTitle className="py-4">
          <div role="status" className="max-w-sm animate-pulse">
            {" "}
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </CardTitle>
        <CardDescription>
          {" "}
          <div role="status" className="max-w-sm animate-pulse">
            {" "}
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center w-full gap-2">
            <div className="flex  flex-col    space-y-1.5">
              <label htmlFor="name">Started Date: </label>
              <div className="text-gray-500 ">
                {" "}
                <div role="status" className="max-w-sm animate-pulse">
                  {" "}
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework">Tech Stacks</label>
              <div
                style={{ objectFit: "contain" }}
                className="flex flex-wrap gap-x-5"
              >
                {Array.from({ length: 6 })?.map((tech, i) => (
                  <div key={i} className="flex items-center justify-center bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>
          <Button>View Github</Button>
        </span>
        <span>
          <Button>View Live</Button>
        </span>
      </CardFooter>
    </Card>
  );
};

export default LoadCardShow;
