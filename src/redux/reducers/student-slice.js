import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentDetails: {},
};

const slice = createSlice({
  name: "student-details",
  initialState,
  reducers: {
    fetchDetails: (state, action) => {
      console.log(action);
      state.studentDetails = action.payload;
    },
    // updateDetails:(state, action) => {
    //     console.log(action)
    // state.applications = state.applications.filter(app =>{ return app._id !== action.payload})
    // },
    // add_Application:(state, action) => {
    //     console.log(action)
    // // state.applications.push(action.payload)
    // },
  },
});

export const { fetchDetails } = slice.actions;
export default slice.reducer;
