"use client"
import React from 'react'
import style from './AdminHome.module.css'
import CountUp from 'react-countup';

const AdminHome = () => {
    return (
       <>
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${style.main}`}>

<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-yellow-300 hover:text-white ${style.expandContent}`}>
    <h3 className="text-xl font-bold">Users</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={12} duration={3}/></p>
</div>

<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-pink-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">User Resumes</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={31} duration={3}/></p>

</div>


<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-teal-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">Companies</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={40} duration={3}/></p>

</div>


<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-indigo-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">Applications</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={48} duration={3}/></p>

</div>


<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-orange-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">Approved Applications</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={6} duration={3}/></p>

</div>

<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-blue-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">Rejected Applications</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={15} duration={3}/></p>

</div>
<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-green-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">Pending Applications</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={14} duration={3}/></p>

</div>

<div className={`m-4 col-span-1 text-center bg-gray-200 py-16 px-2 hover:bg-purple-300 hover:text-white ${style.expandContent}`}>

    <h3 className="text-xl font-bold">Hirings</h3>
    <p className="mt-2 text-5xl font-bold"><CountUp  end={20} duration={3}/></p>

</div>
</div>
       </>
    )
}

export default AdminHome