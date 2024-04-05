"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname,useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import style from './Navbar.module.css';

const Navbar = ({ links, linkNames }) => {
    const router = usePathname(); 
    const route = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuLinksVisible, setMenuLinksVisible] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuLinkClick = () => {
        setIsMenuOpen(false); 
    };
    const [showAlert, setShowAlert] = useState(false);
    const handleLogout = (student) => {
        setShowAlert(true)
    };
    
    const handleConfirm = () => {
        route.push('/')
        setShowAlert(false);
        Cookies.remove('token')
    };

    const handleCancel = () => {
        setShowAlert(false);
    };
    useEffect(() => {
        if (isMenuOpen) {
            setTimeout(() => {
                setMenuLinksVisible(true);
            }, 100);
        } else {
            setMenuLinksVisible(false);
        }
    }, [isMenuOpen]); 
   
    return (
        <>
         {showAlert && (
                <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${style.main}`}>
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"></div>
                    <div className="bg-white p-4 rounded shadow-md z-10 transform transition-all">
                        <p className="text-lg text-gray-800 mb-4">Are you sure you want to logout?</p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm}
                                className={`bg-red-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded mr-4`}
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

            <nav className={` sticky  top-0 left-0 w-full bg-gray-100 p-4 2xl:p-4 xl:p-4 lg:p-4 z-10 transition-all duration-300 ease-in-out`}>
                <div className={`flex items-center justify-between `}>
                    <div className={`flex items-center justify-between flex-shrink-0 sm:w-full lg:w-full 2xl:w-full  `}>
                        <Link href={links[0]} className={`flex-row items-center`}>
                            <img className={`h-16 w-auto sm:h-10 lg:h-14 md:h-12 xl:h-20 2xl:h-32`} src="/Assets/Logo/logo.jpg" alt="Logo" />
                        </Link>
                        <div className={`hidden sm:flex flex-grow flex flex-row items-center justify-end space-x-4 sm:space-x-1 lg:space-x-2 2xl:space-x-3 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-2 sm:ml-1`}>

                            {links.map((link, index) => (
                                <Link key={link} href={`${link}`} className={`2xl:text-xl xl:text-xl sm:text-sm rounded-md px-3 py-2 2xl:py-2  2xl:px-2 lg:px-2 sm:px-1 lg:text-lg hover:text-gray-100 hover:bg-gray-700  transition-transform transform hover:scale-105 ${style.link}  ${router===link?'bg-gray-700 text-gray-100':''}`} onClick={handleMenuLinkClick}>
                                    {linkNames[index]}
                                </Link>
                            ))}
                          <button className="text-md sm:text-lg bg-red-500 text-gray-50 font-bold py-1 px-1 sm:py-1 sm:px-2 md:py-2 md:px-3 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
                          onClick={()=>handleLogout()}
                          >
                            Logout
                          </button>
                        </div>

                    </div>

                    <div className={`flex flex-row items-center ${style.socials}`}>
                        <div className={`sm:hidden`}>
                            <button onClick={toggleMenu} className={`text-gray-700`}>
                                <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`sm:hidden mt-4 bg-gray-100`}>
                        <div className={`flex flex-col items-center`}>
                            {links.map((link, index) => (
                                <Link key={link} href={`${link}`} className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-xl text-gray-700 w-full ${style.link} text-center mt-4 transition-opacity duration-500 ease-in-out transform`} onClick={handleMenuLinkClick}>
                                    {linkNames[index]}
                                </Link>
                            ))}
                             <button className="mt-4 text-xl  bg-red-600 text-gray-50 font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                          onClick={()=>handleLogout()}
                          >
                            Logout
                          </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;

