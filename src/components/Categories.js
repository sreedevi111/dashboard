import React from "react";
import "./Categories.css";
import { Card } from "react-bootstrap";
import design from "../assets/design.svg";
import development from "../assets/web-development.svg"
import marketing from "../assets/business-and-finance.svg"
import it from "../assets/cms.svg"
import handshake from "../assets/handshake.svg";
import programming from "../assets/programming.svg";
import photography from "../assets/diaphragm.svg"
import music from "../assets/music-notes.svg";

function Categories() {
  return (
    <div className="categories">
      <div>
        <h1 className="title">categories</h1>
      </div>
      <div className="icon">
        <div className="icon-row1">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={design} />
            <Card.Body>
              <Card.Title>Design</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={development} />
            <Card.Body>
              <Card.Title>Development</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={marketing} />
            <Card.Body>
              <Card.Title>Marketing</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={it} />
            <Card.Body>
              <Card.Title>IT and Software</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="icon-row2">
        <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={handshake} />
            <Card.Body>
              <Card.Title>Design</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={programming} />
            <Card.Body>
              <Card.Title>Development</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photography} />
            <Card.Body>
              <Card.Title>Marketing</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={music} />
            <Card.Body>
              <Card.Title>IT and Software</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>

        </div>
        <div className="view"> <button >View All</button></div>
        
      </div>
    </div>
  );
}

export default Categories;
