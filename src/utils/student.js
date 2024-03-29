import axios from "axios";
import Cookies from "js-cookie";

export const studentDetails =  async (  setLoading,setFormSubmitted,setData ) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/student', {
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
      const response = await axios.get('https://crs-backend.vercel.app/api/student', {
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
      const response = await axios.post('https://crs-backend.vercel.app/api/student',
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
      const response = await axios.patch('https://crs-backend.vercel.app/api/student',
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


  
  export const allStudents =  async (setLoading,setStudents) => {
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.get('https://crs-backend.vercel.app/api/unemployed-students', {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
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


  
  export const hireStudent =  async (setLoading,email,studentId,position) => {
    const payLoad = {email,
      studentId,
    position}
    console.log(payLoad)
    setLoading(true)
   const token = Cookies.get('token')
    try {
      const response = await axios.post('https://crs-backend.vercel.app/api/hiring',payLoad ,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
     console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }