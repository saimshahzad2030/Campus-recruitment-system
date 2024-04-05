"use client"
import { React, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Unauthorized from '../Unauthorized/Unauthorized';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux'
import { fetchApplications } from '@/redux/reducers/application-slice'

import { userApplications } from '@/utils/applications'
const UserAuthentication = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const pathname = usePathname()
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();   
  const [applications, setApplications] = useState([])
  const [applicationsFetched, setApplicationsFetched] = useState(false)
 useEffect(() => {
    async function checkAuthentication() {
      // try {
      //   const token = Cookies.get('token');
      //   const response = await axios.get(
      //     'https://crs-backend.vercel.app/api/authenticate',
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   if (response.data.role === 'admin' && pathname !== '/admin/home'
      //   && pathname !== '/admin/companies'
      //   && pathname !== '/admin/jobs-details'
      //   && pathname !== '/admin/student-details'
      //   && pathname !== '/admin/students'
        
      //   ) {
      //     setLoading(false)
      //     setUserAuthenticated(false);
      //     return <Unauthorized />

      //   }
      //   else if (response.data.role === 'student' && pathname !== '/student/home'
      //  && pathname !== '/student/company-details'
      //  && pathname !== '/student/student-application'
      //  && pathname !== '/student/user-details'

        
      //   ) {
           
     
      //     setLoading(false)
      //     setUserAuthenticated(false);
      //     return <Unauthorized />

      //   }
      //   else if (response.data.role === 'company' && pathname !== '/company/home'
      //  && pathname !== '/company/applications'
      //  && pathname !== '/company/hired-students'
      //  && pathname !== '/company/jobs'
      //  && pathname !== '/company/job-details'
      //  && pathname !== '/company/students'
     

        
      //   ) {
         
      //     setLoading(false)
      //     setUserAuthenticated(false);
      //     return <Unauthorized />

      //   }
      //   else {
      //     if(response.data.role === 'student'){
      //       userApplications(setLoading,setApplications)
      //       setApplicationsFetched(true)
      //     }
      //     setLoading(false)
      //     setUserAuthenticated(true);
      //     return <>{children}</>

      //   }
      // } catch (error) {
      //   setLoading(false)
      //   setUserAuthenticated(false)
      //   return <Unauthorized />
      // }
      try {
        const token = Cookies.get('token');
        const response = await axios.get(
          'https://crs-backend.vercel.app/api/authenticate',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(response =>{
          if (response.data.role === 'admin' && pathname !== '/admin/home'
        && pathname !== '/admin/companies'
        && pathname !== '/admin/jobs-details'
        && pathname !== '/admin/student-details'
        && pathname !== '/admin/students'
        
        ) {
          setLoading(false)
          setUserAuthenticated(false);
          return <Unauthorized />

        }
        else if (response.data.role === 'student' && pathname !== '/student/home'
       && pathname !== '/student/company-details'
       && pathname !== '/student/student-application'
       && pathname !== '/student/user-details'

        
        ) {
           
     
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
         
          setLoading(false)
          setUserAuthenticated(false);
          return <Unauthorized />

        }
        else {
          if(response.data.role === 'student'){
           

 dispatch(fetchApplications());

           
          }
          setLoading(false)
          setUserAuthenticated(true);
          return <>{children}</>

        }
        }).finally((response)=>{
          // dispatch(fetchApplications(applications))
          console.log(applications)
        })
        
      } catch (error) {
        setLoading(false)
        setUserAuthenticated(false)
        return <Unauthorized />
      }
    }

    checkAuthentication()
  }, [loading, userAuthenticated]);
//   useEffect(()=>{
//     dispatch(fetchApplications(applications[applications.length-1]))
// // console.log(applications)
//     // console.log('applications:',applications)
//     },[applications])


  if (!userAuthenticated && !loading) {
    return <Unauthorized />;
  }
  if (userAuthenticated && !loading) {
    return <>{children}</>
  }


};

export default UserAuthentication;
