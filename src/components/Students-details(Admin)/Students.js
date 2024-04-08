"use client";
import { useState } from "react";
import React from "react";
import style from "./Students.module.css";
import {
  allStudentsDetails,
  deleteStudentDetails,
} from "@/utils/functional-utils/admin-utils";
import Modal from "../Modal/Modal";
const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const handleDeleteButton = (id) => {
    setShowAlert(true);
    setId(id);
  };
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    deleteStudentDetails(setLoading, id);
    setStudents(students.filter((app) => app._id !== id));
    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };
  useState(() => {
    allStudentsDetails(setLoading, setStudents);
  }, []);
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
      {students && students.length > 0 && (
        <div className={`overflow-x-auto `}>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Id
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Name
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  obtained marks
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Faculty
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Tech
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
              {students.map((student) => (
                <tr key={student.id}>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.studentId}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.firstname} {student.lastname}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.obtainedmarks}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.faculty}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.position}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.experience}
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
          </table>
        </div>
      )}
    </>
  );
};

export default Students;
