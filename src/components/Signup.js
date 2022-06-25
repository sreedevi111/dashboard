import React from "react";
import pic from "../assets/Group 3212.svg";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="row-1">
        <img src={pic} alt="" />
        <div className="description">
          <h2>
            World
            <span className="color"> Class</span> Learning For
            <span className="color"> You</span>
          </h2>
          <div className="paragraph">
            <p>
              Pursue a promotion, a raise, or switch careers. 89% of learners
              who have taken a course report career benefits.{" "}
            </p>

            <p>Coursera Learner Outcome Survey, India (2021)</p>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
