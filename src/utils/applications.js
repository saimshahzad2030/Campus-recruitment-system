import axios from "axios";
import Cookies from "js-cookie";

export const addApplication =  async ( setLoading,companyName,location,position,setcompanyClicked) => {
    setLoading(true)
   const token = Cookies.get('token')
   const data = JSON.parse(Cookies.get('data'))
   
    try {
      const response = await axios.post('http://localhost:4000/api/application',
      {
        
  studentId:data.studentId,
 companyname:companyName,
position:position,
experience:data.experience,
location:location,
availability:data.availability,
      },
      
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data.data)
        setData(response.data.data)
        
          setFormSubmitted(true)
        setcompanyClicked(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
      setcompanyClicked(false)

    }
  }


  
export const userApplications =  async ( setLoading,setApplications) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.get('http://localhost:4000/api/application',
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
      if (response.status === 200) {
        setLoading(false)
        console.log(response.data)
        setApplications(response.data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response) 

    }
  }

  
export const cancelApplication =  async ( setLoading,id) => {
    setLoading(true)
   const token = Cookies.get('token')
   
    try {
      const response = await axios.delete('http://localhost:4000/api/application',

      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { id }
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
