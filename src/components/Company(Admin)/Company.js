"use client";
// Students.js
import React, { useEffect, useState } from "react";
import style from "./Company.module.css";
import {
  allCompanies,
  deleteCompany,
} from "@/utils/functional-utils/admin-utils";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [id, setId] = useState(0);
  const [email, setEmail] = useState("");
  const handleDeleteButton = (id, email) => {
    setShowAlert(true);
    setId(id);
    setEmail(email);
  };

  const handleConfirm = () => {
    deleteCompany(setLoading, id, email);
    setCompanies(companies.filter((company) => company._id !== id));
    setShowAlert(false);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    allCompanies(setLoading, setCompanies);
  }, []);
  return (
    <>
      <Modal loading={loading} />
      {showAlert && (
        <Alert
          alertText={
            "Are you sure you want to delete this Company? all of jobs posted by this company will be deleted  "
          }
          confirmButtonColor={
            "`bg-red-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded mr-4 "
          }
          confirmClickHandler={handleConfirm}
          cancelClickHandler={handleCancel}
        />
      )}

      {companies && !loading && (
        <h1
          className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}
        >
          {companies.length === 0
            ? "No Companies to show"
            : "Companies Details"}
        </h1>
      )}
      {companies && companies.length > 0 && (
        <div className={`overflow-x-auto `}>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Name
                </th>
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
              {companies.map((company) => (
                <tr key={company._id}>
                  <td className={`px-4 py-4 border text-center `}>
                    {company.name}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {company.email}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {company.username}
                  </td>
                  <td
                    className={`px-4 py-4 border flex flex-row items-center justify-evenly `}
                  >
                    <button
                      className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() =>
                        handleDeleteButton(company._id, company.email)
                      }
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

export default Companies;
