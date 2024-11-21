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
    <Card className="w-[25rem] flex bg-black text-color">
      <div className="w-[90%] py-4 px-4">
        <div>
          <h3 className="text-2xl">React js</h3>
        </div>
        <p>This is react js</p>
      </div>
      <div className="w-[20%] flex items-center justify-center ">
        <img src={`/techstack/react.png`} width={50} alt="image of product" />
      </div>
    </Card>
  );
};

export default CardShow;
