"use client"
import React, { useState } from 'react'
import style from './Jobs.module.css'
const Jobs = () => {
    const [jobs,setJobs] = useState([
        {id:1, name: 'Company A',type:'full time', role: 'Software Engineer', message: 'We are currently seeking talented Software Engineers to join our team. Apply now!' ,exp:'1-2 yearss'},
        {id:2, name: 'Company B',type:'full time', role: 'Data Scientist', message: 'Join our innovative team as a Data Scientist and work on cutting-edge projects.' ,exp:'1-2 yearss'},
        {id:3, name: 'Company C',type:'full time', role: 'Web Developer', message: 'Are you passionate about web development? Join us as a Web Developer and help us build amazing websites.' ,exp:'1-2 yearss'},
        {id:4, name: 'Company D',type:'full time', role: 'UI/UX Designer', message: 'Calling all creative UI/UX Designers! Join our team and contribute to creating beautiful user experiences.' ,exp:'1-2 yearss'},
        {id:5, name: 'Company E',type:'full time', role: 'Network Engineer', message: 'Join our team of Network Engineers and work on building and maintaining robust networks.' ,exp:'1-2 yearss'},
        {id:6, name: 'Company F',type:'full time', role: 'Project Manager', message: 'We are looking for experienced Project Managers to lead our team and deliver successful projects.' ,exp:'1-2 yearss'},
        {id:7, name: 'Company G',type:'full time', role: 'Business Analyst', message: 'Join us as a Business Analyst and help us analyze data and make informed business decisions.' ,exp:'1-2 yearss'},
        {id:8, name: 'Company H',type:'full time', role: 'Quality Assurance', message: 'We are hiring Quality Assurance professionals to ensure the quality and reliability of our products.' ,exp:'1-2 yearss'},
       ]);
    const [id,setId] = useState(0)
    const handleDeleteButton = (id) => {
        setShowAlert(true)
        setId(id)
    };
    const [showAlert, setShowAlert] = useState(false);
    
    const handleConfirm = () => {
        
        setJobs(jobs.filter(job => job.id !== id));
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
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.name}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.type}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.role}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{job.exp}</td>
                 <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
                     <button
                         className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                         onClick={() => handleDeleteButton(job.id)}
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