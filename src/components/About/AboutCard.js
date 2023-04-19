import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Greetings, everyone! My name is <span className="purple">Mahek Adhaduk, </span>
              and I hail from <span className="purple"> Rajkot, Gujarat, India.</span>
            <br />I pursued my computer engineering degree from <span className="purple">ISB&M COE, Pune. </span>
            <br/>During my time as a student, I had the opportunity to work as an intern at <span className="purple">Progressive Soft-Tech </span>, where I gained valuable experience in software development. Following that, I worked as a full-stack developer at <span className="purple">Code Symphony LLP. </span>, where I contributed to exciting projects and continued to learn and grow as a developer.
            <br />As a passionate programmer, I am eager to explore new opportunities in this field and continue my growth as a developer.
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
              <ImPointRight /> Traveling
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
