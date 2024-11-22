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

const CardShow = () => {
  return (
    <Card className="w-[15rem] md:w-[25rem] bg-black text-color">
      <CardHeader>
        <div className="w-full">
          <img
            src={`/projects/MuicOn.png`}
            alt="image of product"
            className="w-full h-full"
          />
        </div>
        <CardTitle className="py-4">Music On</CardTitle>
        <CardDescription>Music Streaming Web App</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center w-full gap-2">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Tech Stack</label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework">Framework</label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View</Button>
      </CardFooter>
    </Card>
  );
};

export default CardShow;
