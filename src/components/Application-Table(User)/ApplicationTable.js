"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import style from './ApplicationTable.module.css' 
import Modal from '../Modal/Modal'
import { useDispatch,useSelector } from 'react-redux'
import { cancelApplication,fetchApplications,updateApplicationStatus } from '@/redux/reducers/application-slice'
// import io from 'socket.io-client';
const ApplicationTable = () => {
    // const socket = io('http://localhost:4000'); 

    const dispatch = useDispatch();
    const { applications, error,loading } = useSelector((state) => state.applications);
    
    const [id,setId] = useState(0)
    const handleCancelApplication = (id) => {
        setShowAlert(true)
        setId(id)
    };
    const [showAlert, setShowAlert] = useState(false);
    
    const handleConfirm = () => {
        dispatch(cancelApplication(id)) 
        
        setShowAlert(false);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    // useEffect(()=>{
    //     socket.on('updatedStatus', (id,status) => {
    //         // console.log('connected')
    //             // setLikes(count)
    //             console.log('id of aplication: ',id)
    //             console.log('status of aplication: ',status)
    //             dispatch(updateApplicationStatus({ id, status }));
 
    //       });
    // },[])
    return (
        <>
        <Modal loading={loading}/>
          {showAlert && (
                <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${style.main}`}>
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"></div>
                    <div className="bg-white p-4 rounded shadow-md z-10 transform transition-all">
                        <p className="text-lg text-gray-800 mb-4">Are you sure you want to delete this item?</p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
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
            {applications  && !loading &&  <h1 className={`text-center font-bold text-3xl sm:text-5xl my-12 ${style.header}`}>{applications.length===0 ?'No Applications to show':'Your Applications'}</h1>
           }
            {applications && !loading && applications.length>0 &&
            <div className={`overflow-x-auto`}>
            <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
                <thead>
                    <tr>
                        <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}>Company name</th>
                        <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}>Role</th>
                        <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}>Location</th>
                        <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}>Status</th>
                        <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}>Cancel Application</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(application => (
                        <tr key={application.id}>
                            <td className={`px-4 py-4 border text-center `}>{application.companyname}</td>
                            <td className={`px-4 py-4 border text-center `}>{application.position}</td>
                            <td className={`px-4 py-4 border text-center `}>{application.location}</td>
                            <td className={`px-4 py-4 border text-center font-bold  ${application.status ==='reject'?'text-red-600':application.status==='pending'?'text-blue-600':application.status === 'approve'?'text-green-500':''}`}>{application.status === 'approve'?'approved':application.status === 'reject'?'rejected':application.status}</td>
                            <td className={`px-4 py-4 border text-center `}>
                                <button
                                    className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => {handleCancelApplication(application._id);
                                                    console.log('application_id__application table:',application._id)
                                    }

                                    }
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>}
        </>
    );
}

export default ApplicationTable