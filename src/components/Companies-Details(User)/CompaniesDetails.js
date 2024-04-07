import React, { useEffect, useState } from 'react'
import style from './CompaniesDetails.module.css'
import { useRouter } from 'next/navigation';
import { studentDetails2 } from '@/utils/student';
import Cookies from 'js-cookie';
// import { addApplication } from '@/utils/applications';
import { addApplication } from '@/redux/reducers/application-slice';
import Modal from '../Modal/Modal';
import { allJobsPosted } from '@/utils/jobs';
import { useDispatch, useSelector } from 'react-redux';
const CompaniesDetails = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { applications, error } = useSelector((state) => state.applications);
    const [loading, setLoading] = useState(false)
    const [dataExist,setDataExist] = useState(null)
    const [companyclicked, setcompanyClicked] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState({})
    const [companies,setCompanies] = useState([])
    const [alreadyApplied,setAlreadyApplied] = useState(false)
   useEffect(() => {
        studentDetails2(setLoading)
        allJobsPosted(setLoading,setCompanies)
    }, [])

    useEffect(() => {
        setDataExist(Cookies.get('data') !== undefined && JSON.parse(Cookies.get('data')))
        
    }, [loading])

    // console.log('applications:',applications)

    return (
        <>
        {applications && 
        <>
        <Modal loading={loading}/>
        <div className={`flex flex-col items-center ${style.main}`}>
      { !loading &&  <h1 className={`text-center text-3xl sm:text-5xl font-bold my-12 ${style.text}`}

                style={{ display: companyclicked ? 'none' : '' }}

            >Companies Details</h1>}
           {!loading &&  <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:bg-white w-11/12 mb-8`}

style={{ display: companyclicked ? 'none' : '' }}

>
{companies.map((company, index) => (
    <div onClick={() => {
        // console.log('data eist:', dataExist)
        if(dataExist === false){
            alert('You must fill your details in order to apply for some positions')
        }
        else{
           
        setSelectedCompany(company); 
        setcompanyClicked(true);
      const myFilter = applications.filter(app=>app.jobId === company._id);
        if (myFilter.length>0){
            setAlreadyApplied(true)
        }
        else{
            setAlreadyApplied(false)
        }
        }
    }}
        key={company._id}
        className={`bg-gray-700 text-gray-50 sm:bg-gray-50 sm:text-gray-700 p-4 rounded-lg cursor-pointer transition-all hover:text-gray-50 hover:bg-gray-700 duration-300 ease-in-out hover:scale-105`}
        style={{ minHeight: '100px' }}
    >
        <h2 className={`font-bold text-2xl  ${style.text}`}>{company.companyname}</h2>
        <p className={`mt-2 text-lg  ${style.text}`}>Role: {company.position}</p>
        <p className={`mt-1 text-sm  ${style.text}`}>{company.companymessage}</p>
    </div>
))}
</div>}

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
                    <h1 className={`text-5xl font-bold mb-12 text-center w-full text-gray-700 ${style.heading}`}>{selectedCompany.companyname}</h1>
                    <h1 className={`text-2xl px-2 sm:w-5/12 mb-12 text-center w-full text-gray-700 ${style.heading}`}>{`"${selectedCompany.companymessage}"`}</h1>
                    <div className={`grid grid-cols-1 sm:grid-cols-1  w-8/12`}>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-700 ${style.subHeading}`}>Role</h1>
                            <div className={`flex flex-col align-start bg-gray-700 my-4 pl-4`}>
                                <p className={`py-4 text-md text-white ${style.subHeadingText}`}>we are looking for the postion of {selectedCompany.position}</p>
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
                                <p className={`py-4 text-md text-white ${style.subHeadingText}`}>We are tending to provide {selectedCompany.availability}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button

className={`text-lg bg-gray-600 ${!alreadyApplied?'hover:bg-gray-800':''} text-gray-50 font-bold mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline
${alreadyApplied ? 'opacity-50 cursor-not-allowed' : ''}`}
disabled={alreadyApplied}
                    onClick={() => {
                        dispatch(addApplication(selectedCompany._id)).unwind
                        setcompanyClicked(false)
                        }}

                >
                   {alreadyApplied?'Already Applied':'Apply'}
                </button>
            </div>
        </div>
        </>
        }
        </>

    );
}

export default CompaniesDetails