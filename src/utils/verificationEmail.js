"use client"
import axios from "axios";
export const sendVerificationEmail =  async (email,setLoading,setEmailEntered,setType,setResponseMessage,set) => {
    setLoading(true)
  
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/verificationemail', {
        email: email,
      });
  
      if (response.status === 200) {
        setLoading(false)
       setEmailEntered(true)
      setType('success')
        setResponseMessage(response.data.message) 
      }
    } catch (error) {
      setLoading(false)
      setType('failed')
      setResponseMessage(error.response.data.message) 

    }
  }