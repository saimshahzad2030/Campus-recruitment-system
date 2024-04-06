"use client"
import axios from "axios";
export const matchToken =  async (email,token,setLoading,setemailVerified,setType,setResponseMessage) => {
    setLoading(true)
  
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/match-token', {
        email: email,
        token:token
      });
  
      if (response.status === 200) {
        setLoading(false) 
        setemailVerified(true)
        setType('success')
        setResponseMessage(response.data.message) 
      }
    } catch (error) {
      setLoading(false)  
      setType('failed')
      setResponseMessage(error.response.data.message)  
    }
  }