import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nftsite from "../../Assets/Projects/nftsite.png";
import websitebuilder from "../../Assets/Projects/websitebuilder.png";
import jobseek from "../../Assets/Projects/jobseek.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Internships and Personal Project </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={websitebuilder}
              title="Funnel/Website builder INTERN"
              description="I've worked on a product based company which provides Funnel/Website building services. I created Elements and Features of the Funnel Builder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobseek}
              isBlog={false}
              title="Job Seeker Website"
              description="I've worked on a React based JobSeeker website for a client in Singapore. Also I worked with multiple AWS services(Amplify, S3, Dynamo, Cognito) for this project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftsite}
              isBlog={false}
              title="NFT Maker Website"
              description="I've worked with my team on a React based Web Software which creates NFT's, I worked on both FrontEnd as well as Backend sides in this project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
