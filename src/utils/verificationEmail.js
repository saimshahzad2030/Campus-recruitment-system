"use client"
import axios from "axios";
export const sendVerificationEmail =  async (email,setLoading,setEmailEntered) => {
    setLoading(true)
  
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/verificationemail', {
        email: email,
      });
  
      if (response.status === 200) {
        setLoading(false)
  console.log(response.data)
       setEmailEntered(true)
  
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response.data)
    }
  }