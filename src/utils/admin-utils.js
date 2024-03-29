import axios from "axios";
import Cookies from "js-cookie";
// export const addApplication =  async ( setLoading,companyName,location,position,setcompanyClicked) => {
//     setLoading(true)
//    const token = Cookies.get('token')
//    const data = JSON.parse(Cookies.get('data'))
   
//     try {
//       const response = await axios.post('https://crs-backend.vercel.app/api/application',
//       {
        
//   studentId:data.studentId,
//  companyname:companyName,
// position:position,
// experience:data.experience,
// location:location,
// availability:data.availability,
//       },
      
//       {
//         headers: {
//             Authorization: `Bearer ${token}`,
//           },
//       });
  
//       if (response.status === 200) {
//         setLoading(false)
//         console.log(response.data.data)
//         setcompanyClicked(false)
//         setData(response.data.data)
//           setFormSubmitted(true)
//       }
//     } catch (error) {
//       setLoading(false)
//       console.log(error.response)
//       setcompanyClicked(false)

//     }
//   }


  
// export const userApplications =  async ( setLoading,setApplications) => {
//     setLoading(true)
//    const token = Cookies.get('token')
   
//     try {
//       const response = await axios.get('https://crs-backend.vercel.app/api/application',
//       {
//         headers: {
//             Authorization: `Bearer ${token}`,
//           },
//       });
  
//       if (response.status === 200) {
//         setLoading(false)
//         console.log(response.data)
//         setApplications(response.data.data)
//       }
//     } catch (error) {
//       setLoading(false)
//       console.log(error.response) 

//     }
//   }

  
// export const cancelApplication =  async ( setLoading,id) => {
//     setLoading(true)
//    const token = Cookies.get('token')
   
//     try {
//       const response = await axios.delete('https://crs-backend.vercel.app/api/application',

//       {
//         headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           data: { id }
//       }
      
//       );
  
//       if (response.status === 200) {
//         setLoading(false)
//         console.log(response.data) 
//       }
//     } catch (error) {
//       setLoading(false)
//       console.log(error.response) 

//     }
//   }


  
  
export const allCounts =  async (setLoading,setData) => {
  setLoading(true)
 const token = Cookies.get('token')
 
  try {
    const response = await axios.get('https://crs-backend.vercel.app/api/count',

    {
      headers: {
          Authorization: `Bearer ${token}`,
        }
    }
    
    );

    if (response.status === 200) {
      setLoading(false)
      console.log(response.data)
      setData(response.data)
    }
  } catch (error) {
    setLoading(false)
    console.log(error.response) 

  }
}



export const allCompanies =  async (setLoading,setCompanies) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/company',
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        setCompanies(response.data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  

  
export const deleteCompany =  async (setLoading,id,email) => {
    setLoading(true)
   const token = Cookies.get('token')
   console.log(id,email)
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/company?id=${id}&email=${email}`,
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  

  
export const allStudents =  async (setLoading,setStudents) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/all-students',
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        setStudents(response.data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  

  
export const deleteStudent =  async (setLoading,id) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/all-students?id=${id}`,
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  


  
export const allStudentsDetails =  async (setLoading,setStudents) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/all-student-details',
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        setStudents(response.data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  

  
export const deleteStudentDetails =  async (setLoading,id) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/all-student-details?id=${id}`,
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  



  export const allCompaniesDetails =  async (setLoading,setJobs) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/all-jobs-admin',
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        setJobs(response.data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  

  
export const deleteCompanyDetails =  async (setLoading,id) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/all-jobs-admin?id=${id}`,
  
      {
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 
  
    }
  }
  