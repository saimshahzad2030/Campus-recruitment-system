import axios from "axios";
import Cookies from "js-cookie";
import {
  baseUrl,
  headersFunction,
} from "../project-variable-utils/project-utils";

export const allCounts = async (setLoading, setData) => {
  setLoading(true);
  try {
    const response = await axios.get(`${baseUrl}/count`, headersFunction());
    if (response.status === 200) {
      setLoading(false);
      setData(response.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const allCompanies = async (setLoading, setCompanies) => {
  setLoading(true);
  try {
    const response = await axios.get(`${baseUrl}/company`, headersFunction());
    if (response.status === 200) {
      setLoading(false);
      setCompanies(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const deleteCompany = async (setLoading, id, email) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${baseUrl}/company?id=${id}&email=${email}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const allStudents = async (setLoading, setStudents) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl}/all-students`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setStudents(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const deleteStudent = async (setLoading, id) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${baseUrl}/all-students?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    console.log(error);

    setLoading(false);
  }
};

export const allStudentsDetails = async (setLoading, setStudents) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl}/all-student-details`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setStudents(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const deleteStudentDetails = async (setLoading, id) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${baseUrl}/all-student-details?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const allCompaniesDetails = async (setLoading, setJobs) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl}/all-jobs-admin`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setJobs(response.data.data);
    } else {
      console.log(response.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const deleteCompanyDetails = async (setLoading, id) => {
  setLoading(true);
  const token = Cookies.get("token");
  try {
    const response = await axios.delete(
      `${baseUrl}/api/all-jobs-admin?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};
