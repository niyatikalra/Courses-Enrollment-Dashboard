import React from 'react'

function DisplayOnDashboard({courses}) {
  return (
    <div className="dashboard-card">
      <h3>{courses.name}</h3>
      <p>Duration: {courses.duration}</p>
      <p>Instructor: {courses.instructor}</p>
      
      <div className="progress-bar-container">
        <progress value={courses.progress} max="100"></progress>
        <span>{courses.progress}% Completed</span>
      </div>

      <button onClick={()=>{}}>Mark Complete</button>
    </div>
   
  )
}

export default DisplayOnDashboard
