"use client"
import { useState } from 'react'
import React from 'react'
import style from './HiredStudents.module.css'

const HiredStudents = () => {

    const [students, setStudents] = useState([
        { id: 1, firstname: 'John', lastname: 'Doe', obt: '90',job:'teacher',availability:'part-time' , faculty: 'Computer Science', tech: 'React', exp: '2 years' },
        { id: 2, firstname: 'Jane', lastname: 'Smith', obt: '85',job:'teacher',availability:'part-time' , faculty: 'Electrical Engineering', tech: 'Python', exp: '1 year' },
        { id: 3, firstname: 'Alice', lastname: 'Johnson', obt: '95',job:'teacher',availability:'part-time' , faculty: 'Mechanical Engineering', tech: 'JavaScript', exp: '3 years' },
        { id: 4, firstname: 'Bob', lastname: 'Williams', obt: '75',job:'teacher',availability:'part-time' , faculty: 'Civil Engineering', tech: 'Angular', exp: '1.5 years' },
        { id: 5, firstname: 'Emma', lastname: 'Brown', obt: '80',job:'teacher',availability:'part-time' , faculty: 'Chemical Engineering', tech: 'Vue.js', exp: '2.5 years' }
    ]);
    const [id,setId] = useState(0)
    const handleRejectHireButton = (id) => {
        setShowAlert(true)
        setId(id)
    };
    const [showAlert, setShowAlert] = useState(false);
    
    const handleConfirm = () => {
        
        setStudents(students.filter(app => app.id !== id));
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
                        <p className="text-lg text-gray-800 mb-4">Are you sure you want to remove this hiring?</p>
                        <div className="flex justify-center">
                            <button
                                onClick={()=>handleConfirm(id)}
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

{students &&  <h1 className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}>{students.length===0?'No hired Students to show':'Hired Students'}</h1>
}
 {students && students.length>0 &&
 <div className={`overflow-x-auto ${style.main}`}>
 <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
     <thead>
         <tr>
              <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Student Id</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Job</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Reject Hiring</th>
         </tr>
     </thead>
     <tbody>
         {students.map(student => (
             <tr key={student.id}>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.id}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.job}</td>
                 <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
                     <button
                         className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                         onClick={() => handleRejectHireButton(student.id)}
                     >
                         Reject Hiring
                     </button>
                 </td>
             </tr>
         ))}
     </tbody>
 </table>
</div>}
    </>
  )
}

export default HiredStudents