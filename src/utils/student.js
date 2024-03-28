import axios from "axios";
import Cookies from "js-cookie";

export const studentDetails =  async (  setLoading,setFormSubmitted,setData ) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.get('http://localhost:4000/api/student', {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data.data)
        setData(response.data.data)
        
          setFormSubmitted(true)
        
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  export const studentDetails2 =  async (  setLoading ) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.get('http://localhost:4000/api/student', {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
   Cookies.set('data',JSON.stringify(response.data.data))
       
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  export const addStudentDetails =  async (  setLoading,setFormSubmitted,firstname,lastname,studentId,age,faculty,obtainedmarks,position,availability ,experience) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.post('http://localhost:4000/api/student',
      {
        firstname,
 lastname,
 studentId,
 age,
 faculty,
 obtainedmarks,
 position,
 availability,
 experience
      }, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
          setFormSubmitted(true)
        
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }
  
  export const updateStudentDetails =  async (  setLoading,setFormSubmitted,firstname,lastname,studentId,age,faculty,obtainedmarks,position,availability,experience ) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.patch('http://localhost:4000/api/student',
      {
        firstname,
 lastname,
 studentId,
 age,
 faculty,
 obtainedmarks,
 position,
 availability,
 experience
      }, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
          setFormSubmitted(true)
        
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }
