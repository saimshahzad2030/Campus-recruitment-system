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

    console.log("response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
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
    console.log(error.response.data.message);
    return error.message;
  }
};

export const cancelApplication = async (id) => {
  console.log("Application Id: ", id);
  try {
    const response = await axios.delete(
      `${baseUrl}/application?id=${id}`,
      headersFunction()
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.message;
  }
};

// export const cancelApplication = async (id, { rejectWithValue }) => {
//   console.log("Application Id: ", id);
//   try {
//     const response = await axios.delete(
//       `${baseUrl}/application?id=${id}`,
//       headersFunction()
//     );

//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// };
