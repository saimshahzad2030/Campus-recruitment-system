"use client"
import React, { useEffect, useState } from 'react'
import style from './Jobs.module.css'
import Modal from '../Modal/Modal';
import { allCompaniesDetails, deleteCompanyDetails } from '@/utils/admin-utils';
const Jobs = () => {
    const [jobs,setJobs] = useState([]);
    const [id,setId] = useState(0)
    const [loading,setLoading] = useState(false)
    const handleDeleteButton = (id) => {
        setShowAlert(true)
        setId(id)
    };
    const [showAlert, setShowAlert] = useState(false);
    
    const handleConfirm = () => {
        deleteCompanyDetails(setLoading,id)
        setJobs(jobs.filter(job => job._id !== id));
        setShowAlert(false);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };
    useEffect(()=>{
        allCompaniesDetails(setLoading,setJobs)
    },[])
  return (
    <>
    <Modal loading={loading} />
    {showAlert && (
                <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${style.main}`}>
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"></div>
                    <div className="bg-white p-4 rounded shadow-md z-10 transform transition-all">
                        <p className="text-lg text-gray-800 mb-4">Are you sure you want to Delete these details?</p>
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

{jobs &&  <h1 className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}>{jobs.length===0?'No jobs details to show':'job Details'}</h1>
}
 {jobs && jobs.length>0 &&
 <div className={`overflow-x-auto ${style.main}`}>
 <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
     <thead>
         <tr>
              <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Company Name</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Job Type</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Position</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Experience</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Action</th>
         </tr>
     </thead>
     <tbody>
         {jobs.map(job => (
             <tr key={job.id}>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.companyname}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.availability}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.position}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.experience}</td>
                 <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
                     <button
                         className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                         onClick={() => handleDeleteButton(job._id)}
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
  )
  
}

export default Jobs