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

export const allCompanies = async (page,setLoading, setCompanies,setPages) => {
  setLoading(true);
  try {
    const response = await axios.get(`${baseUrl}/company?page=${page}`, headersFunction());
    if (response.status === 200) {
      setLoading(false);
      setCompanies(response.data.data);
      setPages(response.data.pages);
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

export const allStudents = async (page, setLoading, setStudents,setPages) => {
  setLoading(true); 
  try {
    const response = await axios.get(
      `${baseUrl}/all-students?page=${page}`,
      headersFunction()
      
    ); 
    if (response.status === 200) {
      setLoading(false); 
      setStudents(response.data.data);
      setPages(response.data.pages);
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
    setLoading(false);
  }
};

export const allStudentsDetails = async (page,setLoading, setStudents,setPages) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl}/all-student-details?page=${page}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setStudents(response.data.data);
      setPages(response.data.pages)
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

export const allCompaniesDetails = async (page,setLoading, setJobs,setPages) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl}/all-jobs-admin?page=${page}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setJobs(response.data.data);
      setPages(response.data.pages)
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
      `${baseUrl}/all-jobs-admin?id=${id}`,
      headersFunction()
    );
  } catch (error) {
    setLoading(false);
  }
};
