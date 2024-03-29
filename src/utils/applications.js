import axios from "axios";
import Cookies from "js-cookie";
export const addApplication =  async ( setLoading,companyName,location,position,setcompanyClicked) => {
    setLoading(true)
   const token = Cookies.get('token')
   const data = JSON.parse(Cookies.get('data'))
   
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/application',
      {
        
  studentId:data.studentId,
 companyname:companyName,
position:position,
experience:data.experience,
location:location,
availability:data.availability,
      },
      
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        setcompanyClicked(false)
        setData(response.data.data)
          setFormSubmitted(true)
      }
    } catch (error) {
      setLoading(false)
      setcompanyClicked(false)

    }
  }


  
export const userApplications =  async ( setLoading,setApplications) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/application',
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        setApplications(response.data.data)
      }
    } catch (error) {
      setLoading(false)

    }
  }

  
export const cancelApplication =  async ( setLoading,id) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.delete('https://crs-backend.vercel.app/api/application',

      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { id }
      }
      
      );
  
      if (response.status === 200) {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)

    }
  }


  
  
export const companyApplications =  async ( setLoading,setApplications) => {
  setLoading(true)
 const token = Cookies.get('token')
 
  try {
    const response = await axios.get('https://crs-backend.vercel.app/api/all-applications',

    {
      headers: {
          Authorization: `Bearer ${token}`,
        }
    }
    
    );

    if (response.status === 200) {
      setLoading(false)
      setApplications(response.data.data) 
    }
  } catch (error) {
    setLoading(false)

  }
}




export const updateUserApplication =  async ( setLoading,id,status) => {
  const payLoad = {id,status}
  
  setLoading(true)
 const token = Cookies.get('token')
 
  try {
    const response = await axios.patch('https://crs-backend.vercel.app/api/application',payLoad,

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
