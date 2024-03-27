import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  
  
  
    return <>
    <Navbar links = {['/company/home','/company/company-details','/company/students','/company/hired-students']} linkNames = {['Home','Company Detail','Students','Hired Students']}/>

    {children}
    <Footer/>
    <Copyright/>
    </>
   }
   
   
   export default layout