import React from "react";
import "./FeaturedCourse.css";
import design from "../assets/Group 3213.svg";
import rating from "../assets/Group 3141.svg";
import card1 from "../assets/sb-blog-ds-quotes.svg";
import card2 from "../assets/images (2).svg";
import card3 from "../assets/Why-Python-Is-Used-For-Developing-Automated-Trading-Strategy.svg";

// import Slider from "react-slick";

function FeaturedCourse() {
  return (
    <div className="featured-course">
      <img src={design} alt="design" id="feature-abstract-image" />
      <div className="row1">
        <div className="feature-col">
          <span className="title">Featured Courses</span>
          <span className="feature-description">
            <span>Unlock the full potential of your organisation with imc's learning</span>
            <span>technology, e-learning content and strategy consultants.</span>
          </span>
        </div>
      </div>
      <div className="row2">
        <div className="card">
          <img src={card1} alt="" />
          <div className="card-contents">
            <span className="card-title">
              Learn Python Programming Masterclass
            </span>
            <span>Jose Portilla</span>
            <div className="rating">
              <img src={rating} alt="" />
              <span id="rupee">₹5100</span>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={card2} alt="" />
          <div className="card-contents">
            <span className="card-title">
              Learn Python Programming Masterclass
            </span>
            <span>Jose Portilla</span>
            <div className="rating">
              <img src={rating} alt="" />
              <span id="rupee">₹5100</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={card3} alt="" />
          <div className="card-contents">
            <span className="card-title">
              Learn Python Programming Masterclass
            </span>
            <span>Jose Portilla</span>
            <div className="rating">
              <img src={rating} alt="" />
              <span id="rupee">₹5100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourse;
