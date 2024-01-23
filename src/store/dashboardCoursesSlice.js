import { createSlice } from "@reduxjs/toolkit";

const dashboardCoursesSlice= createSlice({
  name: 'enroll',
  initialState: [],
  reducers:{
    addToDashboard:(state, action) => {
     
      return [...state, action.payload];
  },
  deleteFromDashboard: (state,action) => {
    return state.filter((id)=> id !== action.payload) 
  }

}


})


export const dashboardCoursesActions= dashboardCoursesSlice.actions;
export default dashboardCoursesSlice;
