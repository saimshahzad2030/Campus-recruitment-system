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
import Table from "../Table/Table";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
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
    fetchStudents(currentPage, setPages);
  }, [currentPage]);

  const fetchStudents = (startingPage, setPages) => {
    allCompaniesDetails(startingPage, setLoading, setJobs, setPages);
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
          <Table
            columns={[
              "Company Name",
              "Job Type",
              "Position",
              "Experience",
              "Action",
            ]}
            data={jobs}
            setShowAlert={setShowAlert}
            setId={setId}
            currentPage={currentPage}
            fieldsToDisplay={[
              "companyname",
              "availability",
              "position",
              "experience",
            ]}
            buttonStyles={
              "text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonText={"Delete"}
            clickHandler={handleDeleteButton}
          />
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
