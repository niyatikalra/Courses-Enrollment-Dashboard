import React from 'react'
import { useSelector } from 'react-redux'
import DisplayOnDashboard from '../components/DisplayOnDashboard'


function dashboard() {

  const courses= useSelector((store) => store.courses)
  const enrolledCourses = useSelector((store) => store.enroll)
 
  const dashboard= courses.filter((course)=>{
    
    const courseIndex=enrolledCourses.indexOf(course.id)
    
    return courseIndex >= 0;

    
  })




  return (
    <>
    {dashboard.map( courses => <DisplayOnDashboard key={courses.id} courses={courses}></DisplayOnDashboard> 
  
)}
   
    </>
  )
}

export default dashboard
