import UserAuthentication from '@/components/Authenticate/UserAuthentication'
import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  
  
  
    return <>
    <UserAuthentication>
    <Navbar links = {['/admin/home','/admin/companies','/admin/students','/admin/student-details','/admin/jobs-details']} linkNames = {['Home','Companies','Students','Student Details','Jobs Position']}/>
    {children}
    <Footer/>
    <Copyright/>
    </UserAuthentication>
    </>
   }
   
   
   export default layout