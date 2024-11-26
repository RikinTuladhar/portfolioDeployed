import Project from "@/model/Project";
import connectMongoDB from "../../../lib/db";
import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { Types } from "mongoose";

export async function GET(request) {
  try {
    await connectMongoDB();
    // Fetch projects from your database
    const projects = await Project.find(); // Assuming 'Project' is your model

    return NextResponse.json(projects);
  } catch (error) {
    // Return an error response if there's an issue
    return NextResponse.json(
      { message: "Error in fetching users" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectMongoDB();
    const body = await req.json();

    const authHeader = req.headers.get("Authorization");
    const token = validateToken(authHeader);
    if (!token) {
      return NextResponse.json(
        { message: "Unauthrized, token not valid" },
        { status: 401 }
      );
    }
    const session = await decrypt(token);
    if (!session || !session.email) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
    const newProject = new Project(body);
    await newProject.save();
    return NextResponse.json({ message: "Inserted project" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Cannot add project" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json(
      { message: "No Project Id defined" },
      { status: 500 }
    );
  }

  if (!Types.ObjectId.isValid(projectId)) {
    console.log("Invalid Project Id:", projectId); // Debugging line
    return NextResponse.json(
      { message: "Invalid Project Id" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();
    console.log("MongoDB connection successful"); // Debugging line

    const authHeader = req.headers.get("Authorization");
    const token = validateToken(authHeader);
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized, token not valid" },
        { status: 401 }
      );
    }

    const project = await Project.findById(new Types.ObjectId(projectId));
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    const deleteProject = await Project.findByIdAndDelete(
      new Types.ObjectId(projectId)
    );
    if (!deleteProject) {
      return NextResponse.json(
        { message: "Cannot delete project" },
        { status: 500 }
      );
    }

    // Return with a 204 status with no content
    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error when deleting Project:", error); // Detailed error message
    return NextResponse.json(
      { message: `Error when deleting Project: ${error.message}` },
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
