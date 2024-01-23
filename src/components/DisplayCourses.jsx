import React from 'react'
import { useDispatch } from "react-redux"
import { dashboardCoursesActions } from '../store/dashboardCoursesSlice';
import {courseDetailIDActions} from '../store/courseDetailSlice'
import { useNavigate } from "react-router-dom";

function DisplayCourses({ courses }) {
  const navigate= useNavigate();

  const dispatch = useDispatch();

  const handleEnroll =  () => {
   
    dispatch(dashboardCoursesActions.addToDashboard(courses.id))
    alert("course added to the dashboard")
    (navigate("/dashboard"))
   
  }

  const handleDetails = ()=>{
    dispatch(courseDetailIDActions.setCourseId(courses.id))
    navigate('/details')
    console.log(`sent id number: ${courses.id}`);
    
  }

  return (
    <div className="coursesContainer">
      <div className="course-card">
        <h2>{courses.name}</h2>
        <p>Description: {courses.description}</p>
        <p>Instructor: {courses.instructor}</p>

        <div className="button-container">
          <button className="enroll-button" onClick={handleEnroll}
          >Enroll
          </button>
          <button className="details-button" onClick={handleDetails}>Details</button>
        </div>
      </div>

    </div>
  )
}

export default DisplayCourses
