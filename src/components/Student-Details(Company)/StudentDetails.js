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
const StudentDetails = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [id, setId] = useState({});
  const handleHireButton = (student) => {
    setShowAlert(true);
    setStudent(student);
    setId(student._id);
  };
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    hireStudent(setLoading, student.email, student.studentId, student.position);
    setStudents(students.filter((app) => app._id !== id));
    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    allStudents(setLoading, setStudents);
  }, []);
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
      {students && !loading && students.length > 0 && (
        <div className={`overflow-x-auto ${style.main}`}>
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
                  name
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  obtained marks
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Tech
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  faculty
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Hire
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
                    {student.position}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {student.faculty}
                  </td>
                  <td
                    className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                  >
                    <button
                      className="text-lg bg-green-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleHireButton(student)}
                    >
                      Hire
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

export default StudentDetails;
