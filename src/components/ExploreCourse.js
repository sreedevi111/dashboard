import React from 'react'
import "./ExploreCourse.css"
import objects from '../assets/OBJECTS.svg'

function ExploreCourse() {
  return (
    <div className='explore'>
        <div className="para">
        <h5 className='title1'>YOU CAN LEARN ANYTHING</h5>
        <h1>The latest digital skills, within reach.</h1>
        <p>Discover the fastest, most effective way to gain job-ready expertise for the careers of the future.</p>
        <button>Explore Courses</button>
        </div>
        <img src={objects} alt="objects" />
       
    </div>
  )
}

export default ExploreCourse