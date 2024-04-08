import axios from "axios";
import Cookies from "js-cookie";
import {
  baseUrl,
  headersFunction,
} from "../project-variable-utils/project-utils";
export const companyJobs = async (setLoading, setJobs) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl}/company-jobs`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setJobs(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const updateJob = async (
  setLoading,
  id,
  companymessage,
  position,
  experience,
  location,
  availability
) => {
  setLoading(true);
  const dataPayload = {
    id,
    companymessage,
    position,
    experience,
    location,
    availability,
  };
  try {
    const response = await axios.patch(
      `${baseUrl}/company-jobs`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const addJob = async (
  setLoading,
  companymessage,
  position,
  experience,
  location,
  availability
) => {
  setLoading(true);
  const dataPayload = {
    companymessage,
    position,
    experience,
    location,
    availability,
  };
  try {
    const response = await axios.post(
      `${baseUrl}/company-jobs`,
      dataPayload,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const deleteJob = async (setLoading, id) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${baseUrl}/company-jobs?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const allJobsPosted = async (setLoading, setCompanies) => {
  setLoading(true);

  try {
    const response = await axios.get(`${baseUrl}/all-jobs`, headersFunction());

    if (response.status === 200) {
      setLoading(false);
      setCompanies(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};
