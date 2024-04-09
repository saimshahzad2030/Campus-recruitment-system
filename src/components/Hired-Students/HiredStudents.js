"use client";
import { useEffect, useState } from "react";
import React from "react";
import style from "./HiredStudents.module.css";
import {
  hiredStudents,
  rejectHiring,
} from "@/utils/functional-utils/hirings-utils";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";

const HiredStudents = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [id, setId] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  const handleRejectHireButton = (id) => {
    setShowAlert(true);
    setId(id);
  };

  const handleConfirm = () => {
    rejectHiring(setLoading, id);
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
    hiredStudents(startingPage, setLoading, setStudents, setPages);
  };

  return (
    <>
      <Modal loading={loading} />

      {showAlert && (
        <Alert
          alertText={"Are you sure you want to remove this hiring?"}
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
            ? "No hired Students to show"
            : "Hired Students"}
        </h1>
      )}
      {students && !showAlert && pages && students.length > 0 && (
        <div className={`overflow-x-auto `}>
          {/* <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Student Id
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Student email
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Job
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Reject Hiring
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.studentId}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.email}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.position}
                  </td>
                  <td
                    className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                  >
                    <button
                      className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleRejectHireButton(student._id)}
                    >
                      Reject Hiring
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <Table
            columns={["Student Id", "Student email", "Job", "Reject Hiring"]}
            data={students}
            setShowAlert={setShowAlert}
            setId={setId}
            currentPage={currentPage}
            fieldsToDisplay={["studentId", "email", "position"]}
            buttonStyles={
              "text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonText={"Reject Hiring"}
            clickHandler={handleRejectHireButton}
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

export default HiredStudents;
