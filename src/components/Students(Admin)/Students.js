"use client"
// Students.js
import React, { useState } from 'react';
import style from './Students.module.css';

const Students = () => {
    const [students, setStudents] = useState([
        { id: 1, email: 'example1@example.com', username: 'user1' },
        { id: 2, email: 'example2@example.com', username: 'user2' },
        { id: 3, email: 'example3@example.com', username: 'user3' },
        { id: 4, email: 'example4@example.com', username: 'user4' },
    ]);

    const handleDeleteButton = (id) => {
        setShowAlert(true);
        setId(id);
    };

    const [showAlert, setShowAlert] = useState(false);
    const [id, setId] = useState(0);

    const handleConfirm = () => {
        setStudents(students.filter(student => student.id !== id));
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
                        <p className="text-lg text-gray-800 mb-4">Are you sure you want to delete this student?</p>
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

            {students && <h1 className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}>{students.length === 0 ? 'No students to show' : 'Student Details'}</h1>}
            {students && students.length > 0 &&
                <div className={`overflow-x-auto ${style.main}`}>
                    <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
                        <thead>
                            <tr>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Email</th>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Username</th>
                                <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.email}</td>
                                    <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.username}</td>
                                    <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
                                        <button
                                            className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleDeleteButton(student.id)}
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

export default Students;