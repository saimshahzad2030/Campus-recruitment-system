"use client"
import React, { useState } from 'react';
import style from './CompanyDetails.module.css';
import { useSearchParams,useRouter } from 'next/navigation';
import { addJob, updateJob } from '@/utils/jobs';
import Modal from '../Modal/Modal';

const SuspenseFunction = () => {
    const router =  useRouter();
    const params = useSearchParams();
    const [job, setJob] = useState(params.get('position') === undefined ? '' : params.get('position'));
    const [experience, setExperience] = useState(params.get('experience') === undefined ? '' : params.get('experience'));
    const [location, setLocation] = useState(params.get('location') === undefined ? '' : params.get('location'));
    const [typeOfEmployment, setTypeOfEmployment] = useState(params.get('availability') === undefined ? '' : params.get('availability'));
    const [message, setMessage] = useState(params.get('companymessage') === undefined ? '' : params.get('companymessage'));
    const [loading,setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(params.get('_id')){
            updateJob(setLoading,params.get('_id'),message,job,experience,location,typeOfEmployment)
            router.push('/company/jobs')
        }
        else{
            addJob(setLoading,message,job,experience,location,typeOfEmployment)
            router.push('/company/jobs')
        
        }
    };

    return (
        <>
       <Modal loading={loading}/>
             <div className={`bg-gray-700 py-12 ${style.main}`}>
                    <h1 className={`text-4xl font-bold mb-12 text-center text-gray-50 ${style.heading}`}>Job Info</h1>
    
                    <div className="grid grid-cols-1  w-full">
    
    
                        <div className="flex-1  p-6 sm:px-16 w-full">
                            <form onSubmit={handleSubmit} className="w-full sm:w-full">
                                <h2 className="text-2xl font-bold mb-4  text-gray-50" >Fill your Details below</h2>
    
    
                                <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-12'>
                                    
                                    <div className="mb-2">
                                        <label htmlFor="job" className="block text-gray-400 text-sm font-bold mb-2">
                                            Job
                                        </label>
                                        <input
                                            type="text"
                                            id="role"
                                            value={job}
                                            onChange={(e) => setJob(e.target.value)}
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter Job title"
    
                                            required
                                        />
                                    </div>
    
                                    <div className="mb-2">
                                        <label htmlFor="experience" className="block text-gray-400 text-sm font-bold mb-2">
                                            Experience
                                        </label>
                                        <input
                                            type="text"
                                            id="experience"
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)}
    
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter required experience"
                                           
                                            required
                                        />
                                    </div>
    
                                    <div className="mb-2">
                                        <label htmlFor="location" className="block text-gray-400 text-sm font-bold mb-2">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder='Enter your location'
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="typeofemployment" className="block text-gray-400 text-sm font-bold mb-2">
                                            Type of Employment
                                        </label>
                                        <select
                                            type="text"
                                            id="typeofemployment"
                                            value={typeOfEmployment}
                                            onChange={(e) => setTypeOfEmployment(e.target.value)}
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder='Specify Type of employment'
                                            required
                                            > 
                                            <option value="Part-time">Part-time</option>
                                            <option value="Full-time">Full-time</option>
                                            <option value="Internship">Internship</option>
                                            <option value="Contract">Contract</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
        <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
            Message
        </label>
        <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
    
            maxLength={300}  
            minLength={4}
            rows={4}  
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder='Enter obtained marks'
            required
        />
    </div>
    
                                   
                                </div>
    
                                <button
                                    type="submit"
                                    className="text-lg mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                               
                               >
                                    Save Job
                                </button>
                            </form>
                        </div>
                    </div>
    
                </div>
    
        </>
      )
};

const CompanyDetails = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <SuspenseFunction />
        </React.Suspense>
    );
};

export default CompanyDetails;
