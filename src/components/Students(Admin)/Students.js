"use client";
// Students.js
import React, { useEffect, useState } from "react";
import style from "./Students.module.css";
import Modal from "../Modal/Modal";
import Pagination from "../Pagination/Pagination";
import {
  allStudents,
  deleteStudent,
} from "@/utils/functional-utils/admin-utils";
import Alert from "../Alert/Alert";
import Table from "../Table/Table";
const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  const handleDeleteButton = (id) => {
    setShowAlert(true);
    setId(id);
  };

  const handleConfirm = () => {
    deleteStudent(setLoading, id);
    setStudents(students.filter((student) => student._id !== id));
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
          alertText={"Are you sure you want to delete this student?"}
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
          {students.length === 0 ? "No students to show" : "Students"}
        </h1>
      )}
      {students && pages && !showAlert && students.length > 0 && (
        <div className={`overflow-x-auto`}>
          {/* <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Email
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Username
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student) => (
                  <tr key={student.id}>
                    <td className={`px-4 py-4 border text-center `}>
                      {student.email}
                    </td>
                    <td className={`px-4 py-4 border text-center `}>
                      {student.username}
                    </td>
                    <td
                      className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                    >
                      <button
                        className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleDeleteButton(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table> */}
          <Table
            columns={["Email", "Username", "Action"]}
            data={students}
            setShowAlert={setShowAlert}
            setId={setId}
            currentPage={currentPage}
            fieldsToDisplay={["email", "username"]}
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
