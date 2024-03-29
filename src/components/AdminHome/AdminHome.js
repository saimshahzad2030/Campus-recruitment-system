"use client"
import React, { useEffect, useState } from 'react'
import style from './AdminHome.module.css'
import CountUp from 'react-countup';
import { allCounts } from '@/utils/admin-utils';
import Modal from '../Modal/Modal';

const AdminHome = () => {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})
useEffect(()=>{
allCounts(setLoading,setData)
},[])


    return (
       <>
       <Modal loading = {loading}/>
       {data   &&
      <> <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${style.main}`}>

      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-pink-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">User Resumes</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.studentDetails} duration={3}/></p>
      
      </div>
      
      
      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-teal-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">Companies</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.companies} duration={3}/></p>
      
      </div>
      
      
      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-indigo-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">Applications</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.applications} duration={3}/></p>
      
      </div>
      
      
      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-orange-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">Approved Applications</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.approvedApplications} duration={3}/></p>
      
      </div>
      
      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-blue-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">Rejected Applications</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.rejectedApplications} duration={3}/></p>
      
      </div>
      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-green-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">Pending Applications</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.pendingApplications} duration={3}/></p>
      
      </div>
      
      <div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-purple-300 hover:text-white ${style.expandContent}`}>
      
          <h3 className="text-xl font-bold">Hirings</h3>
          <p className="mt-2 text-5xl font-bold"><CountUp  end={data.hirings} duration={3}/></p>
      
      </div>
      </div></>
       }
       </>
    )
}

export default AdminHome