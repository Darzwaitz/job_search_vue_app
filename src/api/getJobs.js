import axios from "axios";

const getJobs = () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  axios.get(`${baseUrl}/jobs`);
};

export default getJobs;
