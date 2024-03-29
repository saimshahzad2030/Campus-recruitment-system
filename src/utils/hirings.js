import axios from "axios";
import Cookies from "js-cookie";



export const hiredStudents =  async ( setLoading,setStudents) => {
  
  setLoading(true)
 const token = Cookies.get('token')
 
  try {
    const response = await axios.get('https://crs-backend.vercel.app/api/hiring',

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




export const rejectHiring =  async ( setLoading,id) => {
  const payLoad = {id}
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/hiring?id=${id}`,
  
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
  