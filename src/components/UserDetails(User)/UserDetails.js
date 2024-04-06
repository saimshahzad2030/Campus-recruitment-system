"use client"

import { useEffect, useState } from 'react';
import style from './UserDetails.module.css'
import { useRouter } from 'next/navigation';
import { addStudentDetails, studentDetails, updateStudentDetails } from '@/utils/student';
import Modal from '../Modal/Modal';
const UserDetails = () => {
    const [data,setData]=useState({})
    const router = useRouter()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [faculty, setFaculty] = useState('')
    const [domainOfInterest, setDomainofInterest] = useState('')
    const [obtainedMarks, setObtainedMarks] = useState()
    const [availabilty, setAvailability] = useState('')
    const [studentId,setStudentId] = useState('')
    const [experience,setExperience] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [isUpdating,setIsUpdating] = useState(false)
    const [loading,setLoading] = useState(false)
    const handleAgeChange = (e) => {
        const inputValue = e.target.value;
        const numericInput = inputValue.replace(/[^0-9]/g, '');
        setAge(numericInput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isUpdating){
            updateStudentDetails(setLoading,setFormSubmitted,firstname,lastname,studentId,age,faculty,obtainedMarks,domainOfInterest,availabilty,experience)
        }
        else{
           addStudentDetails(setLoading,setFormSubmitted,firstname,lastname,studentId,age,faculty,obtainedMarks,domainOfInterest,availabilty,experience)
        }
        studentDetails(setLoading,setFormSubmitted,setData)
        
    };
    useEffect(()=>{
        studentDetails(setLoading,setFormSubmitted,setData)
        
        },[])
        useEffect(() => {
            if (data) {
                setFirstname(data.firstname || '');
                setLastname(data.lastname || '');
                setAge(data.age || '');
                setFaculty(data.faculty || '');
                setDomainofInterest(data.position || '');
                setObtainedMarks(data.obtainedmarks || '');
                setAvailability(data.availability || '');
                setStudentId(data.studentId || '');
                setExperience(data.experience || '');
            }
        }, [loading]);
    return (

        <>
      <Modal loading={loading}/>

            <div className='bg-gray-700 py-12' style={{ display: formSubmitted  ? 'none' : '' }}>
                <h1 className={`text-4xl font-bold mb-12 text-center text-gray-50 ${style.heading}`}>Student Info</h1>

                <div className="grid grid-cols-1  w-full">


                    <div className="flex-1  p-6 sm:px-16 w-full">
                        <form onSubmit={handleSubmit} className="w-full sm:full ">
                            <h2 className="text-2xl font-bold mb-4  text-gray-50" >Fill your Details below</h2>


                            <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-12'>
                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your First name"

                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your Last name"

                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                        Student Id
                                    </label>
                                    <input
                                        type="text"
                                        id="studentid"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your StudentId"

                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="age" className="block text-gray-400 text-sm font-bold mb-2">
                                        Age
                                    </label>
                                    <input
                                        type="text"
                                        id="age"
                                        value={age}
                                        onChange={handleAgeChange}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your age"
                                        maxLength={2}
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                        Faculty
                                    </label>
                                    <input
                                        type="text"
                                        id="faculty"
                                        value={faculty}
                                        onChange={(e) => setFaculty(e.target.value)}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter your faculty i.e: Computer Science, Maths'
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="obtainedmarks" className="block text-gray-400 text-sm font-bold mb-2">
                                        Obtained marks
                                    </label>
                                    <input
                                        type="text"
                                        id="obtmarks"
                                        value={obtainedMarks}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const numericInput = inputValue.replace(/[^0-9]/g, '');
                                            setObtainedMarks(numericInput)
                                        }

                                        }
                                        maxLength={3}
                                        minLength={1}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter obtained marks'

                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="fieldApplying" className="block text-gray-400 text-sm font-bold mb-2">
                                        Field on which applying
                                    </label>
                                    <select
                                        id="fieldApplying"
                                        value={domainOfInterest}
                                        onChange={(e) => setDomainofInterest(e.target.value)}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    >
                                        <option value="">Select Field</option>
                                        <option value="Software Development">Software Development</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Network Engineering">Network Engineering</option>
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="experience" className="block text-gray-400 text-sm font-bold mb-2">
                                       Experience
                                    </label>
                                    <input
                                        type="text"
                                        id="experience"
                                        value={experience}
                                        onChange={(e) => {
                                            setExperience(e.target.value)
                                        }

                                        }
                                    
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter Experience'

                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="availability" className="block text-gray-400 text-sm font-bold mb-2">
                                        Availability
                                    </label>
                                    <select
                                        id="availability"
                                        value={availabilty}
                                        onChange={(e) => setAvailability(e.target.value)}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    >
                                        <option value="">Select Field</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Contract">Contract</option>
                                    </select>
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="text-lg mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                           
                           >
                                Save
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center bg-gray-700 w-full'  style={{ display: formSubmitted  ? '' : 'none' }}>
                <div className={` py-8 w-full`}>
                    <h1 className={`text-3xl sm:text-5xl font-bold mb-12 text-center w-full text-gray-50 ${style.heading}`}>{data.firstname!==undefined?data.firstname:firstname} { data.lastname!==undefined?data.lastname:lastname} </h1>
                    <div className={`grid grid-cols-1 sm:grid-cols-2  w-full`}>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-50 ${style.subHeading}`}>Age</h1>
                            <div className={`flex flex-col align-start bg-gray-50 my-4 pl-4`}>
                                <p className={`py-4 text-md ${style.subHeadingText}`}>I am {data && data.age!==undefined?data.age:age} years old.</p>
                            </div>
                        </div>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-50 ${style.subHeading}`}>Faculty</h1>
                            <div className={`flex flex-col align-start bg-gray-50 my-4 pl-4`}>
                                <p className={`py-4 text-md ${style.subHeadingText}`}>I am currently enrolled in {data.faculty!==undefined?data.faculty:faculty} faculty.</p>
                            </div>
                        </div>

                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-50 ${style.subHeading}`}>Performance</h1>
                            <div className={`flex flex-col align-start bg-gray-50 my-4 pl-4`}>
                                <p className={`py-4 text-md ${style.subHeadingText}`}>I have secured {data.obtainedmarks!==undefined?data.obtainedmarks:obtainedMarks} marks out of 200.</p>
                            </div>
                        </div>

                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-50 ${style.subHeading}`}>Work Stack</h1>
                            <div className={`flex flex-col align-start bg-gray-50 my-4 pl-4`}>
                                <p className={`py-4 text-md ${style.subHeadingText}`}>I am a passionate about my role of {data.position!==undefined?data.position:domainOfInterest}.</p>
                            </div>
                        </div>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-50 ${style.subHeading}`}>Experience</h1>
                            <div className={`flex flex-col align-start bg-gray-50 my-4 pl-4`}>
                                <p className={`py-4 text-md ${style.subHeadingText}`}>I have {data.experience!==undefined?data.experience:experience} of professional experience.</p>
                            </div>
                        </div>
                        <div className={`flex flex-col align-start  m-4`}>
                            <h1 className={`text-3xl font-bold  pl-4 text-gray-50 ${style.subHeading}`}>Availability</h1>
                            <div className={`flex flex-col align-start bg-gray-50 my-4 pl-4`}>
                                <p className={`py-4 text-md ${style.subHeadingText}`}>I am looking for a {data.availability!==undefined?data.availability:availabilty} job.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button
                                
                                className="text-lg bg-gray-50 hover:bg-gray-700 hover:border-solid hover:border-2 hover:border-gray-50 hover:text-gray-50 text-gray-700 font-bold mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={()=>{
setFormSubmitted(false)
setIsUpdating(true)
                            }
                            
                            
                            }
                            
                            >
                                Update
                            </button>
            </div>
        </>
    );
}

export default UserDetails