"use client";
import { useEffect, useState } from "react";
import React from "react";
import style from "./StudentDetails.module.css";
import {
  allStudents,
  hireStudent,
} from "@/utils/functional-utils/student-utils";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";

import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
const StudentDetails = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [id, setId] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const handleHireButton = (student) => {
    setShowAlert(true);
    setStudent(student);
    setId(student._id);
  };

  const handleConfirm = () => {
    hireStudent(setLoading, student.email, student.studentId, student.position);
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
    allStudents(startingPage, setLoading, setStudents, setPages);
  };

  return (
    <>
      <Modal loading={loading} />
      {showAlert && (
        <Alert
          alertText={"Are you sure you want to hire this student?"}
          confirmButtonColor={
            "bg-green-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded mr-4"
          }
          confirmClickHandler={handleConfirm}
          cancelClickHandler={handleCancel}
        />
      )}

      {students && !loading && (
        <h1
          className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}
        >
          {students.length === 0 ? "No Students to show" : "All Students"}
        </h1>
      )}
      {students && pages && !showAlert && students.length > 0 && (
        <div className={`overflow-x-auto ${style.main}`}>
          <Table
            columns={[
              "Id",
              "Name",
              "Marks Obtained",
              "Position",
              "Faculty",
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
              "position",
              "faculty",
            ]}
            buttonStyles={
              "text-lg bg-green-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonText={"Hire"}
            clickHandler={handleHireButton}
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

export default StudentDetails;
