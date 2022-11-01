import axios from "axios";

const getJobs = () => {
  axios.get("http://temp.com/jobs");
};

export default getJobs;
