import React from 'react'
import style from './CompanySection.module.css'
import Link from 'next/link'
const CompanySection = () => {
    return (
        <>
            <h1 className={`text-center font-bold text-4xl mt-16 ${style.heading}`}>Get Started</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${style.main}`}>
                <div className={`m-8 py-12 bg-gray-700 flex justify-center items-center rounded-lg lg:m-8 sm:m-12 `}>
                    <div className={`flex flex-col items-center justify-center`}>
                        <h2 className={`text-white text-center font-bold text-3xl ${style.divHeading}`}>Company requirement</h2>
                        <p className={`mt-4 px-4 sm:px-4 lg:px-8 text-white text-center text-lg ${style.divText}`}>Add the details of the role company is looking for</p>
                        <Link href={`/company/company-details`}>

                            <button className={`bg-white text-gray-700 px-4 py-2 mt-4 inline-block rounded-lg`}>Proceed</button>
                        </Link>
                    </div>
                </div>
                <div className={`m-8 py-12 bg-gray-700 flex justify-center items-center rounded-lg lg:m-8 sm:m-12 `}>


                    <div className={`flex flex-col items-center justify-center`}>
                        <h2 className={`text-white text-center font-bold text-3xl ${style.divHeading}`}>Students</h2>
                        <p className={`mt-4 px-4 sm:px-4 lg:px-8 text-white text-center text-lg ${style.divText}`}>Look what companies students are looking for jobs and how you aligned with them</p>

                        <Link href={`/company/students`}>
                            <button className={`bg-white text-gray-700 px-4 py-2 mt-4 inline-block rounded-lg`}>Proceed</button>
                        </Link>
                    </div>
                </div>
                <div className={`m-8 py-12 bg-gray-700 flex justify-center items-center rounded-lg lg:m-8 sm:m-12 `}>


                    <div className={`flex flex-col items-center justify-center`}>
                        <h2 className={`text-white text-center font-bold text-3xl ${style.divHeading}`}>Applications</h2>
                        <p className={`mt-4 px-4 sm:px-4 lg:px-8 text-white text-center text-lg ${style.divText}`}>Look how many students have applied for your posted roles</p>

                        <Link href={`/company/applications`}>
                            <button className={`bg-white text-gray-700 px-4 py-2 mt-4 inline-block rounded-lg`}>Proceed</button>
                        </Link>
                    </div>
                </div>
                <div className={`m-8 py-12 bg-gray-700 flex justify-center items-center rounded-lg lg:m-8 sm:m-12 `}>


                    <div className={`flex flex-col items-center justify-center`}>
                        <h2 className={`text-white text-center font-bold text-3xl ${style.divHeading}`}>Hired</h2>
                        <p className={`mt-4 px-4 sm:px-4 lg:px-8 text-white text-center text-lg ${style.divText}`}>Look at those students which you hired</p>

                        <Link href={`/company/hired-students`}>
                            <button className={`bg-white text-gray-700 px-4 py-2 mt-4 inline-block rounded-lg`}>Proceed</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanySection