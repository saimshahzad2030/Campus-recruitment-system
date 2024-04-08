import axios from "axios";
import {
  baseUrl,
  headersFunction,
} from "@/utils/project-variable-utils/project-utils";
export const fetchAllApplications = async ({ rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${baseUrl}/application`,
      headersFunction()
    );

    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const addApplication = async (jobId, { rejectWithValue }) => {
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
    return rejectWithValue(error.message);
  }
};

export const cancelApplication = async (id, { rejectWithValue }) => {
  console.log("Application Id: ", id);
  try {
    const response = await axios.delete(
      `${baseUrl}/application?id=${id}`,
      headersFunction()
    );

    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};
