"use client";
import React, { useEffect, useState } from "react";
import style from "./Jobs.module.css";
import Modal from "../Modal/Modal";
import {
  allCompaniesDetails,
  deleteCompanyDetails,
} from "@/utils/functional-utils/admin-utils";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination"; 
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const  [pages,setPages] = useState(0)
  const handleDeleteButton = (id) => {
    setShowAlert(true);
    setId(id);
  };

  const handleConfirm = () => {
    deleteCompanyDetails(setLoading, id);
    setJobs(jobs.filter((job) => job._id !== id));
    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    
    fetchStudents(currentPage ,setPages);
  }, [currentPage]);

  const fetchStudents = (startingPage,setPages) => {
    allCompaniesDetails(startingPage, setLoading, setJobs,setPages);
  };
  
 
  return (
    <>
      <Modal loading={loading} />
      {showAlert && (
        <Alert
          alertText={"Are you sure you want to Delete these details?"}
          confirmButtonColor={
            "bg-red-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded mr-4"
          }
          confirmClickHandler={handleConfirm}
          cancelClickHandler={handleCancel}
        />
      )}

      {jobs && !loading && (
        <h1
          className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}
        >
          {jobs.length === 0 ? "No jobs details to show" : "job Details"}
        </h1>
      )}
      {jobs && pages && !showAlert && jobs.length > 0 && (
        <div className={`overflow-x-auto`}>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Company Name
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Job Type
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Position
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Experience
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
                    {job.companyname}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {job.availability}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {job.position}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {job.experience}
                  </td>
                  <td
                    className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                  >
                    <button
                      className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDeleteButton(job._id)}
                    >
                      Delete
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

export default Jobs;
