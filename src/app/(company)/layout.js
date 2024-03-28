"use client"
import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react' 
const layout = ({children}) => {
  
    return <>
    <Navbar links = {['/company/home','/company/roles','/company/role-details','/company/students','/company/applications','/company/hired-students']} linkNames = {['Home','Roles','Role Details','Students','Applications','Hired Students']}/>

    {children}
    <Footer/>
    <Copyright/>
    </>
   }
   
   
   export default layout