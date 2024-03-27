import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  
  
  
    return <>
    <Navbar links = {['/student/home','/student/user-details','/student/company-details']} linkNames = {['Home','Your Details','Companies']}/>

    {children}
    <Footer/>
    <Copyright/>
    </>
   }
   
   
   export default layout