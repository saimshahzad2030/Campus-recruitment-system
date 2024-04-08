"use client";
import { useEffect, useState } from "react";
import React from "react";
import style from "./ApplicationTable.module.css";
import {
  companyApplications,
  updateUserApplication,
} from "@/utils/functional-utils/applications-utils";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination"; 

// import io from 'socket.io-client';

const ApplicationTable = () => {
  // const socket = io('https://crs-backend.vercel.app',
  // {

  //     transports: ['websocket']
  //  });
  // useEffect(()=>{
  //     socket.on("connect_error", (err) => {
  //         // the reason of the error, for example "xhr poll error"
  //         console.log('message',err.message);

  //         // some additional description, for example the status code of the initial HTTP response
  //         console.log('description',err.description);
  //         console.log('code',err.code);
  //         // some additional context, for example the XMLHttpRequest object
  //         console.log('context',err.context);
  //       });
  // },[])
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [id, setId] = useState(0);
  const [type, setType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const  [pages,setPages] = useState(0)
  const handleOffer = (id, value) => {
    if (value === "approve") {
      setType(value);
    } else {
      setType(value);
    }
    setShowAlert(true);

    setId(id);
  };

  const handleConfirm = () => {
    // updateUserApplication(setLoading,id,type,socket)
    console.log("clicked");
    updateUserApplication(setLoading, id, type);
    console.log("id:", id);
    setApplications(applications.filter((app) => app._id !== id));
    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    
    fetchStudents(currentPage ,setPages);
  }, [currentPage]);

  const fetchStudents = (startingPage,setPages) => {
    companyApplications(startingPage, setLoading, setApplications,setPages);
  };
 
  
  // useEffect(() => {
  //   console.log("useEffect apps: ", applications);
  // }, [applications]);
  return (
    <>
      <Modal loading={loading} />
      {showAlert && (
        <Alert
          alertText={
            type === "approve"
              ? "Are you sure you want to Approve this student application?"
              : "Are you sure you want to Reject this student application?"
          }
          confirmButtonColor={
            type === "approve"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }
          confirmClickHandler={handleConfirm}
          cancelClickHandler={handleCancel}
        />
      )}
      {applications    && !loading && (
        <h1
          className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}
        >
          {applications.length=== 0
            ? "No Applications to show"
            : "Students Applications"}
        </h1>
      )}
      {applications && !showAlert && pages && applications.length > 0 && (
        <div className={`overflow-x-auto ${style.main}`}>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
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
                  Experience
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Availability
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Offer
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.appliedBy}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.position}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.experience}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.availability}
                  </td>
                  <td
                    className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                  >
                    <button
                      className="m-2 text-lg bg-green-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => {
                        handleOffer(application._id, "approve");
                       }}
                    >
                      Approve
                    </button>
                    <button
                      className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => {
                        handleOffer(application._id, "reject");
                         }}
                    >
                      Reject
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

export default ApplicationTable;
