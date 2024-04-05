import axios from "axios";
import Cookies from "js-cookie";



  
  
export const allCounts =  async (setLoading,setData) => {
  setLoading(true)
 const token = Cookies.get('token')
 
  try {
    console.log(token)
    const response = await axios.get('https://crs-backend.vercel.app/api/count',
    {
      headers: {
          Authorization: `Bearer ${token}`,
        }
    }
    
    );

    if (response.status === 200) {
      setLoading(false)
      setData(response.data)
      console.log(response.data)
    }
  } catch (error) {
    setLoading(false)
    console.log(error)
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
        setCompanies(response.data.data)
      }
    } catch (error) {
      setLoading(false)
  
    }
  }
  

  
export const deleteCompany =  async (setLoading,id,email) => {
    setLoading(true)
   const token = Cookies.get('token')
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
      }
    } catch (error) {
      setLoading(false)
  
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
        setStudents(response.data.data)
      }
    } catch (error) {
      setLoading(false)
  
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
      }
    } catch (error) {
      setLoading(false)
  
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
        setStudents(response.data.data)
      }
    } catch (error) {
      setLoading(false)
     
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
      }
    } catch (error) {
      setLoading(false)
     
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
        setJobs(response.data.data)
      }
    } catch (error) {
      setLoading(false)
    
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
      }
    } catch (error) {
      setLoading(false)
  
    }
  }
  