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

const CardShow = ({name,image,description}) => {
  return (
    <Card className="w-[15rem] md:w-[25rem] flex bg-black text-color">
      <div className="w-[90%] py-4 px-4">
        <div>
          <h3 className="font-bold">{name}</h3>
        </div>
        <p>{description}</p>
      </div>
      <div className="w-[20%] flex items-center justify-center ">
        <img src={image} className="size-16" alt="image of product" />
      </div>
    </Card>
  );
};

export default CardShow;
