import React from 'react'
import { useSelector } from 'react-redux'
import '../index.css'

function Details() {

  const courseID = useSelector(store => store.courseDetailID)
  const courses = useSelector(store => store.courses)
  const detailCourse = courses.find((course) => { return courseID==course.id})
  console.log(detailCourse)

  if (!detailCourse) {
    return <div>Course not found.</div>;
  }

  return (
   <>
    <div className="course-card">
      <h2>{detailCourse.name}</h2>
      <p>Description: {detailCourse.description}</p>
      <p>Instructor: {detailCourse.instructor}</p>
      <p>Enrollment Status: {detailCourse.enrollmentStatus}</p>
      <p>Duration: {detailCourse.duration}</p>
      <p>Schedule: {detailCourse.schedule}</p>
      <p>Location: {detailCourse.location}</p>
      <p>Progress: {detailCourse.progress}%</p>

      <h3>Prerequisites:</h3>
      <ul>
        {detailCourse.prerequisites.map((prerequisite, index) => (
          <li key={index}>{prerequisite}</li>
        ))}
      </ul>

      <h3>Syllabus:</h3>
      <ul>
        {detailCourse.syllabus.map((week, index) => (
          <li key={index}>
            <strong>Week {week.week}:</strong> {week.topic} - {week.content}
          </li>
        ))}
      </ul>

      <h3>Enrolled Students:</h3>
      <ul>
        {detailCourse.students.map((student) => (
          <li key={student.id}>{student.name} ({student.email})</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Details
