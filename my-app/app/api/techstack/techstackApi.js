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
  return { getTechStacks };
};

export default techstackApi;
