import connectMongoDB from "@/lib/db";
import TechStack from "@/model/TechStack";
import { BookDown } from "lucide-react";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();
    // Fetch projects from your database
    const techstack = await TechStack.find(); // Assuming 'Project' is your model

    return NextResponse.json(techstack);
  } catch (error) {
    // Return an error response if there's an issue
    return NextResponse.json(
      { message: "Error in fetching tech stacks" },
      { status: 500 }
    );
  }
}


export async function POST(req) {
    try {
      await connectMongoDB();
      const body = await req.json();
        console.log(body)
    //   const authHeader = req.headers.get("Authorization");
    //   const token = validateToken(authHeader);
    //   if (!token) {
    //     return NextResponse.json(
    //       { message: "Unauthrized, token not valid" },
    //       { status: 401 }
    //     );
    //   }
    //   const session = await decrypt(token);
    //   if (!session || !session.email) {
    //     return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    //   }
      const newTechStack = new TechStack(body);
      await newTechStack.save();
      return NextResponse.json({ message: "Inserted Tech Stack" }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: "Cannot add tech stack" },
        { status: 500 }
      );
    }
  }




  function validateToken(authHeader) {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return false;
    }
  
    const token = authHeader.replace("Bearer ", "");
    return token;
  }