import axios from "axios";
import {
  baseUrl,
  headersFunction,
} from "@/utils/project-variable-utils/project-utils";
export const fetchAllApplications = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/application`,
      headersFunction()
    );
 
    return response.data;
  } catch (error) { 
    return error.message;
  }
};

export const addApplication = async (jobId) => {
  try {
    const response = await axios.post(
      `${baseUrl}/application`,
      {
        jobId,
      },
      headersFunction()
    );
    return response.data;
  } catch (error) { 
    return error.message;
  }
};

export const cancelApplication = async (id) => { 
  try {
    const response = await axios.delete(
      `${baseUrl}/application?id=${id}`,
      headersFunction()
    );

    return response.data;
  } catch (error) { 
    return error.message;
  }
};
 