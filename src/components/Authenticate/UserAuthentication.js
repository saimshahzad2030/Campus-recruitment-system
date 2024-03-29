"use client"
import { React, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Unauthorized from '../Unauthorized/Unauthorized';
import { usePathname } from 'next/navigation';
const UserAuthentication = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const pathname = usePathname()
  const [loading, setLoading] = useState(true);
  console.log("UserAuthentication", userAuthenticated);
  useEffect(() => {
    console.log(pathname,'from Admin layout')
    async function checkAuthentication() {
      try {
        const token = Cookies.get('token');
        const response = await axios.get(
          'https://crs-backend.vercel.app/api/authenticate',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.role === 'admin' && pathname !== '/admin/home'
        && pathname !== '/admin/companies'
        && pathname !== '/admin/jobs-details'
        && pathname !== '/admin/student-details'
        && pathname !== '/admin/students'
        
        ) {
          console.log('first condition executed')
          setLoading(false)
          setUserAuthenticated(false);
          return <Unauthorized />

        }
        else if (response.data.role === 'student' && pathname !== '/student/home'
       && pathname !== '/student/company-details'
       && pathname !== '/student/student-application'
       && pathname !== '/student/usere-details'

        
        ) {
          console.log('second condition executed')
        
          setLoading(false)
          setUserAuthenticated(false);
          return <Unauthorized />

        }
        else if (response.data.role === 'company' && pathname !== '/company/home'
       && pathname !== '/company/applications'
       && pathname !== '/company/hired-students'
       && pathname !== '/company/jobs'
       && pathname !== '/company/job-details'
       && pathname !== '/company/students'
     

        
        ) {
          console.log('second condition executed')
        
          setLoading(false)
          setUserAuthenticated(false);
          return <Unauthorized />

        }
        else {
          console.log('third condition executed')

          setLoading(false)
          setUserAuthenticated(true);
          return <>{children}</>

        }
      } catch (error) {
        console.log(error)
        setLoading(false)
        setUserAuthenticated(false)
        return <Unauthorized />
      }
    }

    checkAuthentication()
  }, [loading, userAuthenticated]);



  if (!userAuthenticated && !loading) {
    return <Unauthorized />;
  }
  if (userAuthenticated && !loading) {
    return <>{children}</>
  }


};

export default UserAuthentication;
