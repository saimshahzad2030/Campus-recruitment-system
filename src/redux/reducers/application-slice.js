import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie";
// Async thunk action creator
const token = Cookies.get('token')
export const fetchApplications = createAsyncThunk(
  'applications/fetchApplications',
  async (cid = "", { rejectWithValue }) => {
    try {
        console.log(token)
        const response = await axios.get('https://crs-backend.vercel.app/api/application',
        {
          headers: {
              Authorization: `Bearer ${token}`,
            },
        });
    
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addApplication = createAsyncThunk(
  'applications/addApplications',
  async ( jobId,{ rejectWithValue }) => {
    try {
      console.log('object')
    
       
      const response = await axios.post('https://crs-backend.vercel.app/api/application',
      {
   jobId
      },
      
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      })
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const cancelApplication = createAsyncThunk(
  'applications/cancelApplication',
  async ( id,{ rejectWithValue }) => {
    
   console.log('req hit')
    try {
      const response = await axios.delete(`https://crs-backend.vercel.app/api/application?id=${id}`,

      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      }
      
      );
    
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Reducer slice
const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    loading: false,
    applications: [],
    error: null,
  },
  reducers: {
    // Add a reducer to update application status
    updateApplicationStatus(state, action) {
      const { id, status } = action.payload;
      console.log('req hitted')
      const applicationToUpdate = state.applications.find(app => app._id === id);
      if (applicationToUpdate) {
        applicationToUpdate.status = status;
        console.log(applicationToUpdate.status)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
        console.log('pending')
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload.data;
        state.error = null;

      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('rejected')

      })
      .addCase(addApplication.pending, (state) => {
        state.loading = true;
        console.log('pending')
      })
      .addCase(addApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload.data);
        state.error = null;
        // setcompanyClicked(false)
      })
      .addCase(addApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('rejected')

      })
      .addCase(cancelApplication.pending, (state) => {
        state.loading = true;
        console.log('pending')
      })
      .addCase(cancelApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.pop(action.payload)
       console.log(state.applications)
        state.error = null;
      })
      .addCase(cancelApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('rejected')

      });
  },
});
export const { updateApplicationStatus } = applicationsSlice.actions;
export default applicationsSlice.reducer;