"use client"
// Students.js
import React, { useState } from 'react';
import style from './Company.module.css';

const Companies = () => {
    const [companies, setCompanies] = useState([
        { id: 1, email: 'company123@yahoo.com', username: 'company1',name:'Company B' },
        { id: 2, email: 'companyasd@gmail.com', username: 'company2',name:'Company C' },
        { id: 3, email: 'companyavc@example.com', username: 'company3',name:'Company A' },
        { id: 4, email: 'companyasd@abc.com', username: 'company4',name:'Company E' },
    ]);

    const handleDeleteButton = (id) => {
        setShowAlert(true);
        setId(id);
    };

    const [showAlert, setShowAlert] = useState(false);
    const [id, setId] = useState(0);

    const handleConfirm = () => {
        setCompanies(companies.filter(company => company.id !== id));
        setShowAlert(false);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    return (
        <>
            {showAlert && (
                <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${style.main}`}>
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"></div>
                    <div className="bg-white p-4 rounded shadow-md z-10 transform transition-all">
                        <p className="text-lg text-gray-800 mb-4">Are you sure you want to delete this Company? all of jobs posted by this company will be deleted</p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm}
                                className={`bg-green-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded mr-4`}
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {companies && <h1 className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}>{companies.length === 0 ? 'No Companies to show' : 'Companies Details'}</h1>}
            {companies && companies.length > 0 &&
                <div className={`overflow-x-auto ${style.main}`}>
                    <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
                        <thead>
                            <tr>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Name</th>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Email</th>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Username</th>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map(company => (
                                <tr key={company.id}>
                                    <td className={`px-4 py-4 border text-center ${style.headers}`}>{company.name}</td>
                                    <td className={`px-4 py-4 border text-center ${style.headers}`}>{company.email}</td>
                                    <td className={`px-4 py-4 border text-center ${style.headers}`}>{company.username}</td>
                                    <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
                                        <button
                                            className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleDeleteButton(company.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
        </>
    );
};

export default Companies;
