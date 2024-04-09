import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addApplication,
  cancelApplication,
  fetchAllApplications,
} from "../reducer-services/applications";
export const fetchApplicationsThunk = createAsyncThunk(
  "applications/fetchApplications",
  fetchAllApplications
);

export const addApplicationThunk = createAsyncThunk(
  "applications/addApplications",
  (id) => addApplication(id)
);

export const cancelApplicationThunk = createAsyncThunk(
  "applications/cancelApplication",
  (id) => cancelApplication(id)
);

const applicationsSlice = createSlice({
  name: "applications",
  initialState: {
    loading: false,
    applications: [],
    error: null,
  },
  reducers: {
    updateApplicationStatus(state, action) {
      const { id, status } = action.payload;
      // console.log('req hitted')
      const applicationToUpdate = state.applications.find(
        (app) => app._id === id
      );
      if (applicationToUpdate) {
        applicationToUpdate.status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicationsThunk.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(fetchApplicationsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload.data;
        state.error = null;
      })
      .addCase(fetchApplicationsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("rejected");
      })
      .addCase(addApplicationThunk.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(addApplicationThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = [...state.applications, action.payload.data];
        state.error = null;
        console.log("fulfilled");

        // setcompanyClicked(false)
      })
      .addCase(addApplicationThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("rejected");
      })
      .addCase(cancelApplicationThunk.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(cancelApplicationThunk.fulfilled, (state, action) => {
        // state.applications.pop(action.payload)
        state.loading = false;
        state.applications = state.applications.filter(
          (app) => app._id !== action.payload.id
        );
        state.error = null;
        console.log("payload", action.payload);
        console.log("fulfilled");
      })
      .addCase(cancelApplicationThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("rejected");
      });
  },
});
export const { updateApplicationStatus } = applicationsSlice.actions;
export default applicationsSlice.reducer;
