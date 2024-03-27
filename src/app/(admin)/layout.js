import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  
  
  
    return <>
    <Navbar links = {['/admin/home','/admin/companies','/admin/students']} linkNames = {['Home','Companies','Students']}/>

    {children}
    <Footer/>
    <Copyright/>
    </>
   }
   
   
   export default layout