import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahek Adhaduk </span>
            from <span className="purple"> Rajkot, Gujarat, India.</span>
            <br />I'm a Computer Engineering Student at <span className="purple">ISB&M COE, Pune. </span>
            <br />I worked as a INTERN at <span className="purple">Progressive Soft-Tech </span>
            <br />I'm currently working as a Full-Stack Developer at  <span className="purple">Code Symphony LLP. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Makz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
