"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import style from './Navbar.module.css';

const Navbar = ({ links, linkNames }) => {
    const router = usePathname(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuLinksVisible, setMenuLinksVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a menu link is clicked
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
            <nav className={` relative top-0 left-0 w-full bg-gray-100 p-4 2xl:p-8 xl:p-4 lg:p-4 z-10 transition-all duration-300 ease-in-out`}>
                <div className={`flex items-center justify-between `}>
                    <div className={`flex items-center justify-between flex-shrink-0 sm:w-full lg:w-full 2xl:w-full  `}>
                        <Link href={links[0]} className={`flex-row items-center`}>
                            <img className={`h-16 w-auto sm:h-10 lg:h-14 md:h-12 xl:h-20 2xl:h-32`} src="/Assets/Logo/logo.jpg" alt="Logo" />
                        </Link>
                        <div className={`hidden sm:flex flex-grow flex flex-row items-center justify-end space-x-4 sm:space-x-1 lg:space-x-2 2xl:space-x-1 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-2 sm:ml-1`}>

                            {links.map((link, index) => (
                                <Link key={link} href={`${link}`} className={`lg:text-lg 2xl:text-2xl xl:text-xl sm:text-md rounded-md px-3 2xl:py-4 py-2 2xl:px-8 lg:px-2 sm:px-1 lg:text-lg hover:text-gray-100 hover:bg-gray-700  transition-transform transform hover:scale-105 ${style.link}  ${router===link?'bg-gray-700 text-gray-100':''}`} onClick={handleMenuLinkClick}>
                                    {linkNames[index]}
                                </Link>
                            ))}
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
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;

