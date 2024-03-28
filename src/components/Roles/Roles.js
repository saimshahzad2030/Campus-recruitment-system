"use client"
import React,{useState,useEffect} from 'react'
import style from './Roles.module.css'
import {useRouter } from 'next/navigation'
const Roles = () => {
    const router = useRouter()
    const [roles, setRoles] = useState([
        { id: 1,  role: 'Teacher', location: 'Surjani Town', type: 'Full time',experience:'2 years',message: 'We are currently seeking talented Software Engineers to join our team. Apply now!' },
        { id: 2, role: 'Software Engineer', location: 'Karachi', type: 'Internship',experience:'fresh',message: 'We are currently seeking talented Software Engineers to join our team. Apply now!' },
    ]);
    const [iD,setId] = useState(0)
    const [alertType,setAlertType] = useState('delete')
    

    const handleDeleteRole = (id) => {
        setAlertType('delete')
        setShowAlert(true)
        setId(id)
    };

    const handleEditRole = (id) => {
        setAlertType('edit')
        setShowAlert(true)
        setId(id)
    };
    const [showAlert, setShowAlert] = useState(false);
    
    const handleConfirm = (id) => {
        if(alertType == 'delete'){
        setRoles(roles.filter(app => app.id !== id));
            
        setShowAlert(false);
        }
        else{

        
        const roleToEdit = roles.find(role => role.id === id);
        console.log(roleToEdit)
        const queryParams =  roleToEdit;
        const queryString = new URLSearchParams(queryParams).toString();
        if (roleToEdit) {
            router.push(
                `/company/role-details?${queryString}`
            );
        } else {
            console.error('Invalid role ID');
        }
        setShowAlert(false);
        }
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
                        <p className="text-lg text-gray-800 mb-4">{alertType === 'delete'?'Are you sure you want to delete this role?':'You want to edit this role?'}</p>
                        <div className="flex justify-center">
                            <button
                                onClick={()=>handleConfirm(iD)}
                                className={`${alertType === 'delete'?'bg-red-500':'bg-green-500'} hover:${alertType === 'delete'?'bg-red-600':'bg-green-600'} text-white font-bold py-2 px-4 rounded mr-4`}
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

{roles &&  <h1 className={`text-center font-bold text-2xl sm:text-5xl my-12 ${style.headers}`}>{roles.length===0?'No roles to show':'Published Roles'}</h1>
}
 {roles && roles.length>0 &&
 <div className={`overflow-x-auto ${style.main}`}>
 <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
     <thead>
         <tr>
              <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Role</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Location</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Employment Type</th>
             <th className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl ${style.headers}`}>Action</th>
         </tr>
     </thead>
     <tbody>
         {roles.map(role => (
             <tr key={role.id}>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{role.role}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{role.location}</td>
                 <td className={`px-4 py-4 border text-center ${style.headers}`}>{role.type}</td>
                 <td className={`px-4 py-4 border flex flex-row items-center justify-evenly ${style.headers}`}>
                 <button
                         className="m-2 text-lg bg-green-600 text-gray-50 font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                         onClick={() => handleEditRole(role.id)}
                     >
                         Edit
                     </button>
                     <button
                         className="m-2 text-lg bg-red-600 text-gray-50 font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                         onClick={() => handleDeleteRole(role.id)}
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
  )
}

export default Roles