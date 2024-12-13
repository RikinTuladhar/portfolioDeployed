import axios from "axios";
import React from "react";

const techstackApi = () => {
  
  async function getTechStacks() {
    try {
      const res = await axios.get("/api/techstack");
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error when fetching projects");
    }
  }

  async function addTechStack(token, value) {
      try {
        const res = await axios.post("/api/techstack", value, {
          headers: {
            Authorization: `Bearer ${token}`, // Use token in headers if needed
          },
        });
        const data = await res.data.message;
          console.log(data);
        return data;
      } catch (error) {
        throw new Error("Error when posting data", error);
      }
    }
  return { getTechStacks,addTechStack };
};

export default techstackApi;
