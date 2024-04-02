"use client"
import React, { useState } from 'react'
import style from './Footer.module.css'
import Link from 'next/link'
const Footer = () => {
    const [query, setQuery] = useState('')
    return (
     <>
     <div className='h-1 bg-gray-50'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full bg-gray-700 py-16'>
            <div className=' py-4 px-3  flex flex-col items-center justify-start bg-gray-700 sm:ml-4'>
                <h1 className={`text-3xl sm:text-2xl  text-gray-50 font-bold ${style.heading}`}>About</h1>
                <p className={`text-xl sm:text-lg text-gray-300 mt-4 text-center ${style.text}`}> Our motive is to provide students and companies a transparent system so that companies can find their employees based on merit </p>
            </div>
            <div className=' py-4  flex flex-col items-center justify-start bg-gray-700 '>
                <h1 className={`text-3xl sm:text-2xl  text-gray-50 font-bold ${style.heading}`}>Contact us</h1>
                <p className={`text-xl sm:text-lg text-gray-300 mt-4 ${style.text}`}> +92 314 1234231</p>
                <p className={`text-xl sm:text-lg text-gray-300 ${style.text}`}>+92 314 1234231</p>
            </div>
           <div className=' py-4 flex flex-col items-center justify-start bg-gray-700 '>
                <h1 className={`text-3xl sm:text-2xl text-gray-50 font-bold ${style.heading}`}>Socials</h1>

                <div className={` flex flex-row items-center ${style.socials}  p-4 rounded-lg`}>
                    <Link href={'https://www.linkedin.com/in/saim-shahzad-476bba25b/'}>
                        <img className={`bg-gray-700 h-8 w-8 2xl:h-8 2xl:w-8 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex sm:h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 xl:mr-5 lg:mr-6 sm:mr-6  transition-transform transform hover:scale-105 ${style.icon1}`} src="/Assets/socials/linkedin.png" alt="Facebook" />
                    </Link>
                    <Link href={'https://github.com/saimshahzad2030'}>
                        <img className={`bg-gray-700 h-8 w-8 2xl:h-8 2xl:w-8 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 xl:mr-5 lg:mr-6  sm:mr-6 transition-transform transform hover:scale-105 ${style.icon2}`} src="/Assets/socials/github.png" alt="Facebook" />
                    </Link>
                    <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                        <img className={`bg-gray-700 h-8 w-8 2xl:h-8 2xl:w-8 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex h-4 w-4 rounded-full cursor-pointer  mr-3 2xl:mr-8 xl:mr-5 lg:mr-6  sm:mr-6 transition-transform transform hover:scale-105 ${style.icon3}`} src="/Assets/socials/facebook.png" alt="Facebook" />
                    </Link>
                    <Link href={'https://twitter.com/saimshehzad10'}>
                        <img className={`bg-gray-700 h-8 w-8 2xl:h-8 2xl:w-8 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8 sm:flex h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 xl:mr-5 lg:mr-6  sm:mr-6 transition-transform transform hover:scale-105 ${style.icon4}`} src="/Assets/socials/twitter.png" alt="Facebook" />
                    </Link>
                    <Link href={'https://instagram.com/saim_shahzad_321?igshid=MzNlNGNkZWQ4Mg=='}>
                        <img className={`bg-gray-700 h-8 w-8 2xl:h-8 2xl:w-8 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 sm:mr-6  transition-transform transform hover:scale-105 ${style.icon5}`} src="/Assets/socials/instagram.png" alt="Facebook" />
                    </Link></div>
            </div>
            <div className='  py-4 px-4 sm:px-16 flex flex-col items-center justify-start bg-gray-700 '>
                <h1 className={`text-3xl sm:text-2xl text-gray-50  font-bold ${style.heading}`}>Query</h1>

                <input
                    type="text"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="mt-4 appearance-none border rounded w-full py-2 px-3 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                <button className=" mt-4 bg-gray-50 hover:bg-gray-200 text-gray-700 font-bold py-1 px-2 w-full rounded">
                    Submit
                </button>
            </div>


        </div>
     </>
    )
}

export default Footer