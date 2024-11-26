"use client";
import React, { useEffect, useState } from "react";
import projectApi from "@/app/api/projects/projectsApi";
import getCookie from "@/helper/getCookie";
import Cookies from "js-cookie";
const page = () => {
  const { addProject } = projectApi();
  const [token,setToken] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    start_date: "",
    tech_stack: [],
    github_link: "",
    website_link: "",
  });

  console.log(formData);

  const techOptions = [
    "React Js",
    "Tailwind CSS",
    "Next Js",
    "Spring Boot",
    "MySQL",
    "MongoDB",
    "Java",
    "PHP",
    "Javascript",
    "Express",
    "Node"
    
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const techStack = checked
          ? [...prev.tech_stack, value] // Add to tech stack
          : prev.tech_stack.filter((tech) => tech !== value); // Remove from tech stack

        return { ...prev, tech_stack: techStack };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for submission
    const projectData = { ...formData };
    console.log(projectData);
    // Call the parent function to add the project
    addProject(token,projectData);

    // Reset form
    setFormData({
      title: "",
      description: "",
      image: "",
      start_date: "",
      tech_stack: [],
      github_link: "",
      website_link: "",
    });
  };

  useEffect(() => {
    const token = Cookies.get('session');
    if (token) {
      console.log("Token is present:", token);
      setToken(token);
    } else {
      console.log("Token not found");
    }
  }, []);
  
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
           <div>
      <h1>{token ? `Token Exist` : 'No token found'}</h1>
    </div>
      <h2 className="mb-4 text-xl font-bold">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block mb-2 font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-medium text-gray-700"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-medium text-gray-700"
            htmlFor="start_date"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Tech Stack
          </label>
          <div className="flex flex-wrap gap-4">
            {techOptions.map((tech) => (
              <div key={tech} className="flex items-center">
                <input
                  type="checkbox"
                  id={tech}
                  name="tech_stack"
                  value={tech}
                  checked={formData.tech_stack.includes(tech)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={tech} className="text-gray-700">
                  {tech}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-medium text-gray-700"
            htmlFor="github_link"
          >
            GitHub Link
          </label>
          <input
            type="url"
            id="github_link"
            name="github_link"
            value={formData.github_link}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-medium text-gray-700"
            htmlFor="website_link"
          >
            Website Link
          </label>
          <input
            type="url"
            id="website_link"
            name="website_link"
            value={formData.website_link}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default page;
