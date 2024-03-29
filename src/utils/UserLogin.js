"use client"
import axios from "axios";
import Cookies from "js-cookie";
export const login =  async (email,password,setLoading,setLoginSuccesfull,callback) => {
    setLoading(true)
   
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/login', {
        email,password
      });
  
      if (response.status === 200) {
        setLoading(false)
        setLoginSuccesfull(true)
        Cookies.set('token',response.data.token)
        if (callback) {
            callback(response.data.role);
          }
      }
    } catch (error) {
      setLoginSuccesfull(false)
      setLoading(false)
      alert(error.response.data.message)
    }
  }

  export const Signup =  async (email,username,name,password,role,setLoading,setSignupSuccesfull,callback) => {
    setLoading(true)
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/signup', {
        email,
        username,
        name,
        password,
        role
      });
  
      if (response.status === 200) {
        setLoading(false)
        setSignupSuccesfull(true)
        Cookies.set('token',response.data.token)

        if (callback) {
            callback(response.data.role);
          }
      }
      else{
      alert(response.data.message)
      }
    } catch (error) {
      setLoading(false)
      setSignupSuccesfull(false)
      alert(error.response.data.message)

    }
  }

  export const autoLogin = async(setLoading,callback)=>{
    try {
      const token = Cookies.get('token');
      setLoading(true)
      const response = await axios.get(
        'https://crs-backend.vercel.app/api/authenticate',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        if(response.status ===200){
          
        if (callback) {
          callback(response.data.role);
        }
        }
    } catch (error) {
      setLoading(false)
      
    }
  }
  