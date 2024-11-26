
import axios from "axios";

const projectApi = () => {
  async function getProjects() {
    try {
      const res = await axios.get("/api/projects");
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error when fetching projects");
    }
  }

  async function addProject(token, value) {
    try {
      const res = await axios.post("/api/projects", value, {
        headers: {
          Authorization: `Bearer ${token}`, // Use token in headers if needed
        },
      });
      const data = await res.data;
      //   console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error when posting data", error);
    }
  }

  return { getProjects, addProject };
};

export default projectApi;
