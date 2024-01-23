import { createSlice } from "@reduxjs/toolkit";

const courseDetailSlice = createSlice({
  name: 'courseDetailID',
  initialState: "",
  reducers: {
    setCourseId(state, action) {
      return action.payload;
    }

  }

})

export const courseDetailIDActions = courseDetailSlice.actions;

export default courseDetailSlice;