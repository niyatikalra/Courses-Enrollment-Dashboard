import { createSlice } from "@reduxjs/toolkit";
import courseData from "../data/courseData";


const courseSlice = createSlice({
  name: 'Courses',
  'initialState': courseData,
  'reducers': {
    addInitialCourses: (store, action) =>{
      return store;


    }
  }
})

export const courseActions=  courseSlice.actions;
export default courseSlice;

