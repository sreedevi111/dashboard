import React from "react";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <div>
        <h1 className="title-categories">Categories</h1>
      </div>
      <div className="icon">
        <div className="icon-row1">
          <div className="card-categories design-card">
          <span className="card-img design" > </span>
            <span className="category-name">Design</span>
          </div>
          <div className="card-categories development-card">
          <span className="card-img development" > </span>
            <span className="category-name">Development</span>
          </div>
          <div className="card-categories marketing-card">
          <span className="card-img marketing" > </span>
            <span className="category-name">Marketing</span>
          </div>
          <div className="card-categories it-card">
          <span className="card-img it" > </span>
            <span className="category-name">IT & Software</span>
          </div>
        </div>
        <div className="icon-row2">
        <div className="card-categories business-card">
          <span className="card-img business" > </span>
            <span className="category-name">Business</span>
          </div>
          <div className="card-categories programming-card">
          <span className="card-img programming" > </span>
            <span className="category-name">Programming</span>
          </div>
          <div className="card-categories photography-card">
          <span className="card-img photography" > </span>
            <span className="category-name">Photography</span>
          </div>
          <div className="card-categories music-card">
          <span className="card-img music" > </span>
            <span className="category-name">Music</span>
          </div>
        </div>

        <div className="view-button">
          {" "}
          <div className="button-outline">View All</div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
