"use client";
import React, { useEffect, useState } from "react";
import projectApi from "@/app/api/projects/projectsApi";
import techstackApi from "@/app/api/techstack/techstackApi";
import Cookies from "js-cookie";
const Page = () => {
  const { getTechStacks } = techstackApi();
  const { addProject } = projectApi();
  const [token, setToken] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [searching, setSearching] = useState("");
  console.log("filtering", filtered);
  const [formData, setFormData] = useState({
    title: "",
    image: "/techstack/",
  });
  const [techOptions, setTechOptions] = useState([]);
  console.log(techOptions);
  useEffect(() => {
    (async () => {
      const res = await getTechStacks();
      const data = await res;
      setTechOptions(data);
    })();
  }, []);

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for submission
    const projectData = { ...formData };
    console.log(projectData);
    // Call the parent function to add the project
    addProject(token, projectData);

    // Reset form
    setFormData({
      title: "",
      image: "",
    });
  };

  useEffect(() => {
    const token = Cookies.get("session");
    if (token) {
      console.log("Token is present:", token);
      setToken(token);
    } else {
      console.log("Token not found");
    }
  }, []);

  function handleFilter(value) {
    setSearching(value);
    const filtering = techOptions.filter((i) =>
      i.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("inside filtering function", filtering);
    setFiltered(filtering);
  }

  return (
    <div className="w-full">
      <div className="p-6  w-[70vw] bg-white rounded-lg shadow-md">
        <div>
          <h1>{token ? `Token Exist` : "No token found"}</h1>
        </div>
        <h2 className="mb-4 text-xl font-bold">Add New Tech Stack</h2>
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
              htmlFor="title"
            >
              Image Url
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
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

      <div className="w-full bg-slate-200 my-10 rounded-xl ">
        <div className="px-10 py-5 space-y-3">
          <h1 className="text-xl font-bold ">Tech Stack Already Exist</h1>
          <input
            type="search"
            onChange={(e) => handleFilter(e.target.value)}
            className="px-5 py-2 rounded-lg"
          />
        </div>
        <hr />
        {filtering(filtered, techOptions, searching)}
      </div>
    </div>
  );
};

export default Page;
function filtering(filtered, techOptions, searching) {
  return <>{searching.length > 0 ? FilteredResult() : DefaultResult()}</>;

  function DefaultResult() {
    return techOptions?.map((tech, i) => showTechStack(i, tech));
  }

  function FilteredResult() {
    return filtered.length > 0 ? (
      filtered.map((tech, i) => showTechStack(i, tech))
    ) : (
      <div className="w-full font-bold text-red-500 flex  gap-x-10 items-center px-10 py-5 h-[5rem] rounded-xl">
        Not Found
      </div>
    );
  }
}

function showTechStack(i, tech) {
  return (
    <div
      key={i}
      className="w-full flex  gap-x-10 items-center px-10 py-5 h-[5rem] rounded-xl"
    >
      <span className="size-10">
        <img
          src={`/${tech.image}`}
          className="w-full h-full"
          alt="image of tech stack"
        />
      </span>
      <span className="font-sans font-semibold">{tech.title}</span>
    </div>
  );
}
