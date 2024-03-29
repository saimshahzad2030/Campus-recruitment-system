import axios from "axios";
import Cookies from "js-cookie";

export const companyJobs =  async ( setLoading,setJobs) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/company-jobs',
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
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

  
export const updateJob =  async ( setLoading,id,companymessage,position,experience,location,availability) => {
    setLoading(true)
   const token = Cookies.get('token')
   const dataPayload = {
    id,companymessage, position,experience,location,availability
  };
    try {
      const response = await axios.patch('https://crs-backend.vercel.app/api/company-jobs',dataPayload,
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
        
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 

    }
  }


  export const addJob =  async ( setLoading,companymessage,position,experience,location,availability) => {
    setLoading(true)
   const token = Cookies.get('token')
   const dataPayload = {
    companymessage, position,experience,location,availability
  };
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/company-jobs',dataPayload,
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
        
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 

    }
  }

  export const deleteJob =  async ( setLoading,id) => {
    setLoading(true)
   const token = Cookies.get('token')
   console.log(id)
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/company-jobs?id=${id}`,
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        
    });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 

    }
  }


  export const allJobsPosted =  async ( setLoading, setCompanies) => {
    setLoading(true)
   const token = Cookies.get('token')
  
    try {
      const response = await axios.get(`https://crs-backend.vercel.app/api/all-jobs`,
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        
    });
  
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
