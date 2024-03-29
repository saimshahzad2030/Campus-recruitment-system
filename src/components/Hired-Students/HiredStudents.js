"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import style from './HiredStudents.module.css'
import { hiredStudents, rejectHiring } from '@/utils/hirings'
import Modal from '../Modal/Modal'

const HiredStudents = () => {
const [loading,setLoading] = useState(false)
    const [students, setStudents] = useState([]);
    const [id,setId] = useState(0)
    const handleRejectHireButton = (id) => {
        setShowAlert(true)
        setId(id)
    };
    const [showAlert, setShowAlert] = useState(false);
    
    const handleConfirm = () => {
        rejectHiring(setLoading,id)
        setStudents(students.filter(app => app._id !== id));
        setShowAlert(false);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };
    useEffect(()=>{
        hiredStudents(setLoading,setStudents)
    },[])
  return (
    <>
    <Modal loading={loading}/>
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

{students && !loading &&  <h1 className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}>{students.length===0?'No hired Students to show':'Hired Students'}</h1>
}
 {students && !loading &&   students.length>0 &&
 <div className={`overflow-x-auto ${style.main}`}>
 <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
     <thead>
         <tr>
              <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Student Id</th>
              <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Student email</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Job</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Reject Hiring</th>
         </tr>
     </thead>
     <tbody>
         {students.map(student => (
             <tr key={student.id}>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.studentId}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.email}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{student.position}</td>
                 <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
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
 </table>
</div>}
    </>
  )
}

export default HiredStudents