import React from 'react'
import Link from 'next/link'
import style from './UserSection.module.css'
const UserSection = () => {
  return (
   <>
   <h1 className={`text-center font-bold text-4xl mt-16 ${style.heading}`}>Get Started</h1>
    <div className={`grid grid-cols-1 sm:grid-cols-2`}>
      <div className={`m-8 py-12 bg-gray-700 flex justify-center items-center rounded-lg lg:m-8 sm:m-12 `}>
        <div className={`flex flex-col items-center justify-center`}>
          <h2 className={`text-white text-center font-bold text-3xl ${style.divHeading}`}>Your info</h2>
          <p className={`mt-4 px-4 sm:px-4 lg:px-8 text-white text-center text-lg ${style.divText}`}>Add your essential infos so that companies can short list you for the jobs</p>
          <Link href={`/student/user-details`}>

            <button className={`bg-white text-gray-700 px-4 py-2 mt-4 inline-block rounded-lg`}>Proceed</button>
          </Link>
        </div>
      </div>
      <div className={`m-8 py-12 bg-gray-700 flex justify-center items-center rounded-lg lg:m-8 sm:m-12 `}>


        <div className={`flex flex-col items-center justify-center`}>
          <h2 className={`text-white text-center font-bold text-3xl ${style.divHeading}`}>Companies</h2>
          <p className={`mt-4 px-4 sm:px-4 lg:px-8 text-white text-center text-lg ${style.divText}`}>Look what companies are looking for and how you aligned with them</p>

          <Link href={`/student/company-details`}>
            <button className={`bg-white text-gray-700 px-4 py-2 mt-4 inline-block rounded-lg`}>Proceed</button>
          </Link>
        </div>
      </div>
    </div>
   
   </>

  )
}

export default UserSection