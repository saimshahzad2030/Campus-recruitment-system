"use client"
import axios from "axios";
import Cookies from "js-cookie";
export const login =  async (email,password,setLoading,setLoginSuccesfull,callback) => {
    setLoading(true)
   
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,password
      });
  
      if (response.status === 200) {
        setLoading(false)
        setLoginSuccesfull(true)
        console.log(response.data.role)
        Cookies.set('token',response.data.token)
        if (callback) {
            callback(response.data.role);
          }
      }
    } catch (error) {
      setLoading(false)
      setLoginSuccesfull(false)
      console.log(error.response.data)
    }
  }

  export const Signup =  async (email,username,name,password,role,setLoading,setSignupSuccesfull,callback) => {
    setLoading(true)
  console.log(email,username,password,name)
    try {
      const response = await axios.post('http://localhost:4000/api/signup', {
        email,
        username,
        name,
        password,
        role
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data.role)
        setSignupSuccesfull(true)
        Cookies.set('token',response.data.token)

        if (callback) {
            callback(response.data.role);
          }
      }
    } catch (error) {
      setLoading(false)
      setSignupSuccesfull(false)
      console.log(error.response.data)
    }
  }