import React from "react";
import "./FeaturedCourse.css";
// import design from "../assets/Group 3174.svg";
import design from "../assets/Group 3213.svg"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import card1 from "../assets/sb-blog-ds-quotes.svg";
import card2 from "../assets/images (2).svg";
import card3 from "../assets/Why-Python-Is-Used-For-Developing-Automated-Trading-Strategy.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FeaturedCourse() {
  return (
    <div>
      <div className="row1">
        <img src={design} alt="design" />
        <div className="column">
          <h3>Featured Courses</h3>
          <p>
            Unlock the full potential of your organisation with imc’s learning
            technology, e-learning content and strategy consultants.
          </p>
        </div>
      </div>
      <div className="row2">
        
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Learn Python Programming Masterclass</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>Learn Python Programming Masterclass </Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>Learn Python Programming Masterclass </Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FeaturedCourse;
