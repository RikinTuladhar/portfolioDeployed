"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const LoadTechStack = ({ i }) => {
  return (
    <Card
      key={i}
      className="w-[15rem] items-center px-5 md:w-[25rem] justify-between flex bg-black text-color"
    >
      <div className="px-4 py-4">
        <div>
          <h3 className="font-bold">
            {" "}
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
          </h3>
        </div>
        <div>
          {" "}
          <div className="w-full space-y-4">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-60 "></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-60 "></div>
          </div>
        </div>
      </div>
      <div className="w-[10%]  flex items-center justify-center ">
        <div className="flex items-center justify-center w-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
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
      </div>
    </Card>
  );
};

export default LoadTechStack;
