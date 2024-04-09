"use client";
import { useState, useEffect } from "react";
import React from "react";
import style from "./Students.module.css";
import Alert from "../Alert/Alert";
import {
  allStudentsDetails,
  deleteStudentDetails,
} from "@/utils/functional-utils/admin-utils";
import Modal from "../Modal/Modal";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const handleDeleteButton = (id) => {
    setShowAlert(true);
    setId(id);
  };

  const handleConfirm = () => {
    deleteStudentDetails(setLoading, id);
    setStudents(students.filter((app) => app._id !== id));
    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    fetchStudents(currentPage, setPages);
  }, [currentPage]);

  const fetchStudents = (startingPage, setPages) => {
    allStudentsDetails(startingPage, setLoading, setStudents, setPages);
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

      {students && !loading && (
        <h1
          className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}
        >
          {students.length === 0
            ? "No Students details to show"
            : "Student Details"}
        </h1>
      )}
      {students && pages && !showAlert && students.length > 0 && (
        <div className={`overflow-x-auto `}>
          <Table
            columns={[
              "Id",
              "Name",
              "Obtained Marks",
              "Faculty",
              "Tech",
              "Experience",
              "Action",
            ]}
            data={students}
            setShowAlert={setShowAlert}
            setId={setId}
            currentPage={currentPage}
            fieldsToDisplay={[
              "studentId",
              "firstname",
              "obtainedmarks",
              "faculty",
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

export default Students;
