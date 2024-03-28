"use client"
import axios from "axios";
export const matchToken =  async (email,token,setLoading,setemailVerified) => {
    setLoading(true)
  
    try {
      const response = await axios.post('http://localhost:4000/api/match-token', {
        email: email,
        token:token
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        setemailVerified(true)
  
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response.data)
    }
  }