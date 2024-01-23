import React from 'react'
import '../index.css'
import { useSelector } from "react-redux"
import DisplayCourses from '../components/displayCourses';

function Courses() {

  const courses = useSelector(store => store.courses);




  return (
    <>

   {courses.map(courses => <DisplayCourses key={courses.id} courses={courses}></DisplayCourses> )}


    </>

  )
}

export default Courses
