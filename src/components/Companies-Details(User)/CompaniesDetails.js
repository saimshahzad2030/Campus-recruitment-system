import React, { useEffect, useState } from 'react'
import style from './CompaniesDetails.module.css'
import { useRouter } from 'next/navigation';
import { studentDetails2 } from '@/utils/student';
import Cookies from 'js-cookie';
import { addApplication } from '@/utils/applications';
import Modal from '../Modal/Modal';
const CompaniesDetails = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({})
    const [companyclicked, setcompanyClicked] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState({})
    const [applicationSubmitted, setApplicationSubmitted] = useState(false)
    const companies = [
        { name: 'Company A', type: 'full time', role: 'Software Engineer', message: 'We are currently seeking talented Software Engineers to join our team. Apply now!', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company B', type: 'full time', role: 'Data Scientist', message: 'Join our innovative team as a Data Scientist and work on cutting-edge projects.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company C', type: 'full time', role: 'Web Developer', message: 'Are you passionate about web development? Join us as a Web Developer and help us build amazing websites.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company D', type: 'full time', role: 'UI/UX Designer', message: 'Calling all creative UI/UX Designers! Join our team and contribute to creating beautiful user experiences.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company E', type: 'full time', role: 'Network Engineer', message: 'Join our team of Network Engineers and work on building and maintaining robust networks.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company F', type: 'full time', role: 'Project Manager', message: 'We are looking for experienced Project Managers to lead our team and deliver successful projects.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company G', type: 'full time', role: 'Business Analyst', message: 'Join us as a Business Analyst and help us analyze data and make informed business decisions.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
        { name: 'Company H', type: 'full time', role: 'Quality Assurance', message: 'We are hiring Quality Assurance professionals to ensure the quality and reliability of our products.', exp: '1-2 yearss', location: 'Johar Town, Karachi' },
    ];
    const roleDetails = { name: 'Company A', message: 'Calling all creative UI/UX Designers! Join our team and contribute to creating beautiful user experiences.', role: 'UI/Ux Designer', experience: '1-2 years', location: 'Johar Town, Karachi', type: 'full time' }
    useEffect(() => {
        studentDetails2(setLoading)

    }, [])

    useEffect(() => {
        console.log(Cookies.get('data') !== undefined && JSON.parse(Cookies.get('data')))

    }, [loading])
    return (
        <>
        <Modal loading={loading}/>
        <div className={`flex flex-col items-center ${style.main}`}>
            <h1 className={`text-center text-3xl sm:text-5xl font-bold my-12 ${style.text}`}

                style={{ display: companyclicked ? 'none' : '' }}

            >Companies Details</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:bg-white w-11/12 mb-8`}

                style={{ display: companyclicked ? 'none' : '' }}

            >
                {companies.map((company, index) => (
                    <div onClick={() => {
                        setSelectedCompany(company); setcompanyClicked(true);
                    }}
                        key={index}
                        className={`bg-gray-700 text-gray-50 sm:bg-gray-50 sm:text-gray-700 p-4 rounded-lg cursor-pointer transition-all hover:text-gray-50 hover:bg-gray-700 duration-300 ease-in-out hover:scale-105`}
                        style={{ minHeight: '100px' }}
                    >
                        <h2 className={`font-bold text-2xl  ${style.text}`}>{company.name}</h2>
                        <p className={`mt-2 text-lg  ${style.text}`}>Role: {company.role}</p>
                        <p className={`mt-1 text-sm  ${style.text}`}>{company.message}</p>
                    </div>
                ))}
            </div>

            <div className='flex flex-col items-center bg-gray-50 w-full' style={{ display: companyclicked ? '' : 'none' }}>
                <div className='flex flex-row items-center justify-start  cursor-pointer  w-full' onClick={() => { setcompanyClicked(false) }}>
                    <button style={{ display: !companyclicked ? 'none' : '' }}

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 sm:w-16  sm:h-16 bg-gray-200 m-4 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <p className={`py-4 text-md sm:text-3xl text-gray-700 font-bold ${style.subHeadingText}`}>Go Back</p>

                </div>
                <div className={` py-8 w-full flex flex-col items-center`}>
                    <h1 className={`text-5xl font-bold mb-12 text-center w-full text-gray-700 ${style.heading}`}>{selectedCompany.name}</h1>
                    <h1 className={`text-2xl w-10/12 px-2 sm:w-5/12 mb-12 text-center w-full text-gray-700 ${style.heading}`}>{`"${selectedCompany.message}"`}</h1>
                    <div className={`grid grid-cols-1 sm:grid-cols-1  w-8/12`}>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-700 ${style.subHeading}`}>Role</h1>
                            <div className={`flex flex-col align-start bg-gray-700 my-4 pl-4`}>
                                <p className={`py-4 text-md text-white ${style.subHeadingText}`}>we are looking for the postion of {selectedCompany.role}</p>
                            </div>
                        </div>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-700 ${style.subHeading}`}>Experience</h1>
                            <div className={`flex flex-col align-start bg-gray-700 my-4 pl-4`}>
                                <p className={`py-4 text-md text-white ${style.subHeadingText}`}>We expect at least {selectedCompany.experience} of professional experience</p>
                            </div>
                        </div>

                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-700 ${style.subHeading}`}>location</h1>
                            <div className={`flex flex-col align-start bg-gray-700 my-4 pl-4`}>
                                <p className={`py-4 text-md text-white ${style.subHeadingText}`}>We are located at {selectedCompany.location}</p>
                            </div>
                        </div>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-700 ${style.subHeading}`}>Type of Employment</h1>
                            <div className={`flex flex-col align-start bg-gray-700 my-4 pl-4`}>
                                <p className={`py-4 text-md text-white ${style.subHeadingText}`}>We are tending to provide {selectedCompany.type}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button

                    className="text-lg bg-gray-700 hover:bg-gray-50 hover:border-solid hover:border-2 hover:border-gray-700 hover:text-gray-700 text-gray-50 font-bold mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        addApplication(setLoading,selectedCompany.name,selectedCompany.location,selectedCompany.role,setcompanyClicked)
                    }}

                >
                    Apply
                </button>
            </div>
        </div>
        </>

    );
}

export default CompaniesDetails