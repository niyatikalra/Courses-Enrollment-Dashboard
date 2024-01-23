import {configureStore} from "@reduxjs/toolkit"

import courseSlice from "./courseSlice.js";
import dashboardCoursesSlice from "./dashboardCoursesSlice.js"
import courseDetailSlice from "./courseDetailSlice.js"


const store= configureStore({
  reducer:{
    courses: courseSlice.reducer,
    enroll : dashboardCoursesSlice.reducer,
    courseDetailID : courseDetailSlice.reducer,

  }
})

export default store;