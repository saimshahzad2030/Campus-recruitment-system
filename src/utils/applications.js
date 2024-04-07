import axios from "axios";
import Cookies from "js-cookie";
export const addApplication =  async ( setLoading,setcompanyClicked,jobId) => {
    setLoading(true)
   const token = Cookies.get('token')
   const data = JSON.parse(Cookies.get('data'))
   
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/application',
      {
   jobId
      },
      
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        setcompanyClicked(false)
        // console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      setcompanyClicked(false)
      // console.log(error)
    }
  }


  
export const userApplications =  async ( setLoading,setApplications) => {
    setLoading(true)
   const token = Cookies.get('token')
  //  console.log(token)
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
      const response = await axios.delete(`https://crs-backend.vercel.app/api/application?id=${id}`,

      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
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
      // socket.emit('statusChanged',id,status)

    }
  } catch (error) {
    setLoading(false)

  }
}
