"use client";
import { useEffect, useState } from "react";
import React from "react";
import style from "./ApplicationTable.module.css";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelApplicationThunk,
  fetchApplicationsThunk,
  updateApplicationStatus,
} from "@/redux/reducers/application-slice";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";

// import io from 'socket.io-client';
const ApplicationTable = () => {
  // const socket = io('http://localhost:4000');

  const dispatch = useDispatch();
  const { applications, error, loading } = useSelector(
    (state) => state.applications
  );

  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    // Calculate pages whenever applications changes
    if (applications) {
      const calculatedPages = Math.ceil(applications.length / 10);
      setPages(calculatedPages);
    }
  }, [applications]); // Run effect whenever applications changes

  const handleCancelApplication = (id) => {
    setShowAlert(true);
    setId(id);
  };
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    dispatch(cancelApplicationThunk(id));

    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };
  // console.log("applications:", applications);
  // useEffect(()=>{
  //     socket.on('updatedStatus', (id,status) => {
  //         // console.log('connected')
  //             // setLikes(count)
  //             console.log('id of aplication: ',id)
  //             console.log('status of aplication: ',status)
  //             dispatch(updateApplicationStatus({ id, status }));

  //       });
  // },[])
useEffect(()=>{
console.log(currentPage,'current page')
},[currentPage])
  return (
    <>
      <Modal loading={loading} />
      {showAlert && (
        <Alert
          alertText={"Are you sure you want to delete this item?"}
          confirmButtonColor={"bg-red-500 hover:bg-red-600 "}
          confirmClickHandler={handleConfirm}
          cancelClickHandler={handleCancel}
        />
      )}
      {applications && !loading && (
        <h1
          className={`text-center font-bold text-3xl sm:text-5xl my-12 ${style.header}`}
        >
          {applications.length === 0
            ? "No Applications to show"
            : "Your Applications"}
        </h1>
      )}
      {applications && !loading && applications.length > 0 && (
        <div className={`overflow-x-auto`}>
          <Table
            columns={[
              "Company name",
              "Job",
              "Location",
              "status",
              "Cancel Application",
            ]}
            data={applications}
            currentPage={currentPage}
            fieldsToDisplay={["companyname", "position", "location", "status"]}
            buttonStyles={
              "text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
            buttonText={"Cancel"}
            clickHandler={handleCancelApplication}
            tableType={'client'}
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

export default ApplicationTable;
