import UserAuthentication from '@/components/Authenticate/UserAuthentication'
import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({ children }) => {



    return <>
        <UserAuthentication>
            <Navbar links={['/student/home', '/student/user-details', '/student/company-details', '/student/student-application']} linkNames={['Home', 'Your Details', 'Companies', 'Your Applications']} />

            {children}
            <Footer />
            <Copyright />
        </UserAuthentication>
    </>
}


export default layout