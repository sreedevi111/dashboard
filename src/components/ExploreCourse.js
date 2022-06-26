import React from "react";
import "./ExploreCourse.css";
import objects from "../assets/OBJECTS.svg";

function ExploreCourse() {
  return (
    <div className="explore">
      <div className="explore-description">
        <span className="explore-head1">YOU CAN LEARN ANYTHING</span>
        <span className="explore-head2">
          The latest digital skills, within reach.
        </span>
        <span className="explore-para">
          Discover the fastest, most effective way to gain job-ready expertise
          for the careers of the future.
        </span>

        <div className="button-outline"> Explore Courses</div>
      </div>
      <img src={objects} alt="objects" />
    </div>
  );
}

export default ExploreCourse;
