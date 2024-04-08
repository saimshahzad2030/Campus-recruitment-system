"use client";
import React, { useState, useEffect } from "react";
import style from "./Roles.module.css";
import { useRouter } from "next/navigation";
import { companyJobs, deleteJob } from "@/utils/functional-utils/jobs-utils";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination";
const Roles = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [id, setId] = useState(0);
  const [alertType, setAlertType] = useState("delete");
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const  [pages,setPages] = useState(0)
  const handleDeleteRole = (id) => {
    setAlertType("delete");
    setShowAlert(true);
    setId(id); 

  };

  const handleEditRole = (id) => {
    setAlertType("edit");
    setShowAlert(true);
    console.log('edit:',id)
    setId(id); 
  };

  const handleConfirm = () => {
    if (alertType == "delete") {
      deleteJob(setLoading, id);
      setJobs(jobs.filter((app) => app._id !== id));
      setShowAlert(false);
    } else {
      const jobToEdit = jobs.find((job) => job._id === id);
      console.log(jobToEdit)
      console.log(id)
      const queryParams = jobToEdit;
      const queryString = new URLSearchParams(queryParams).toString();
      if (jobToEdit) {
        router.push(`/company/job-details?${queryString}`);
      } else {
        console.error("Invalid role ID");
      }
      setShowAlert(false);
    }
  };

  const handleCancel = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    
    fetchJobs(currentPage ,setPages);
  }, [currentPage]);

  const fetchJobs = (startingPage,setPages) => {
    companyJobs(startingPage, setLoading, setJobs,setPages);
  };
  
  return (
    <>
      <Modal loading={loading} />
      {showAlert && (
        <Alert
          alertText={
            alertType === "delete"
              ? "Are you sure you want to delete this role?"
              : "You want to edit this role?"
          }
          confirmButtonColor={
            alertType === "delete"
              ? "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
              : "hover: bg-green-600 bg-green-500 text-white font-bold py-2 px-4 rounded mr-4"
          }
          confirmClickHandler={handleConfirm}
          cancelClickHandler={handleCancel}
        />
      )}

      {jobs  && !loading && (
        <h1
          className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}
        >
          {jobs.length === 0 ? "No jobs to show" : "Published Jobs"}
        </h1>
      )}
      {jobs && pages && !showAlert  && jobs.length > 0 && (
        <div className={`overflow-x-auto ${style.main}`}>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Job
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Location
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Employment Type
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className={`px-4 py-4 border text-center `}>
                    {job.position}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {job.location}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {job.availability}
                  </td>
                  <td
                    className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                  >
                    <button
                      className="m-2 text-lg bg-green-600 text-gray-50 font-bold py-2 px-2 rounded sm:w-4/12    focus:outline-none focus:shadow-outline"
                      onClick={() => {handleEditRole(job._id);console.log(job._id)}}
                    >
                      Edit
                    </button>
                    <button
                      className="m-2 text-lg bg-red-600 text-gray-50 font-bold py-2 px-2 rounded  sm:w-4/12  focus:outline-none focus:shadow-outline"
                      onClick={() => handleDeleteRole(job._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
        currentPage={currentPage}
        totalPages={pages}
        onPageChange={setCurrentPage}
      />
        </div>
      )}
    </>
  );
};

export default Roles;
