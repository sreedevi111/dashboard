import React from "react";
import "./Testimonials.css";
import quotes from "../assets/Path 1042.svg";
import icon1 from "../assets/brooke-cagle-274465-unsplash.svg";
import icon2 from "../assets/junior-reis-Q_uVpGtseAQ-unsplash.svg";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="title-testimonials">Testimonials</div>
      <div className="testimonial-partition">
        <div id="testimonial-card">
          <img src={quotes} alt="" />
          <span className="testimonial-quote">
            Expand your career opportunities with Python
          </span>
          <span className="testimonial-description">
            The curriculum was directly targeted toward applied techniques with
            high profile projects real datasets with industry partners. It
            helped me achieve my career transition goal.
          </span>
          <div className="author">
            <img src={icon1} alt="" />
            <div className="author-col">
              <span id="student">Sanjay Sharma</span>
              <span> Student</span>
            </div>
          </div>
        </div>
        <div id="testimonial-card">
          <img src={quotes} alt="" />
          <span className="testimonial-quote">
            A very good platform to connect similar people.
          </span>
          <span className="testimonial-description">
            The curriculum was aligned with what I wanted to study. The
            assignments are specific to the industry I’m in. I was able to
            develop new language translation tools for my company.
          </span>
          <div className="author">
            <img src={icon2} alt="" />
            <div className="author-col">
              <span id="student">Danny Vora</span>
              <span>Trainer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
