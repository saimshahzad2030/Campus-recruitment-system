import axios from "axios";
import Cookies from "js-cookie";
import {
  headersFunction,
  baseUrl,
} from "../project-variable-utils/project-utils";
export const hiredStudents = async (setLoading, setStudents) => {
  setLoading(true);
  try {
    const response = await axios.get(`${baseUrl}/hiring`, headersFunction());

    if (response.status === 200) {
      setLoading(false);
      setStudents(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const rejectHiring = async (setLoading, id) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${baseUrl}/hiring?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};
