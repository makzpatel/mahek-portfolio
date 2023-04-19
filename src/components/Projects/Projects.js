import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nftsite from "../../Assets/Projects/nftsite.png";
import websitebuilder from "../../Assets/Projects/websitebuilder.png";
import jobseek from "../../Assets/Projects/aceplp.png";
import zomato from "../../Assets/Projects/zomato2.png"
import crmsite from "../../Assets/Projects/crm.png"
import loansite from "../../Assets/Projects/loansite.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Internships and Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={websitebuilder}
              title="Funnel/Website builder INTERN"
              description="I have experience working for a product-based company that specializes in providing funnel and website building services. As part of my role, I was responsible for designing and implementing various elements and features within the funnel builder platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobseek}
              isBlog={false}
              title="Job Seeker Website"
              description="I had the opportunity to work on a React-based JobSeeker website for a client based in Singapore. During this project, I gained experience working with various AWS services, including Amplify, S3, DynamoDB, and Cognito."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftsite}
              isBlog={false}
              title="NFT Maker Website"
              description="I collaborated with my team to develop a web software using React that enables the creation of NFTs. Throughout the project, I worked on both the frontend and backend sides, contributing to various aspects of the software's development and implementation."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crmsite}
              isBlog={false}
              title="Practice Management Software"
              description="I had the opportunity to work on a practice management website using Next.js. By leveraging the powerful features of this framework, I was able to develop a fast and responsive website with a focus on optimal user experience. Working on this project allowed me to enhance my skills in front-end development and provided me with valuable experience in creating professional-grade websites."
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zomato}
              isBlog={false}
              ghLink={'https://github.com/makzpatel/zomato-clone'}
              title="Zomato Clone Website"
              description="As a personal interest project, I created a Zomato clone using React. This project allowed me to hone my skills in front-end development and gain a deeper understanding of the React framework. By developing a functional clone of the popular food delivery platform, I was able to further expand my knowledge of web development and user experience design."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loansite}
              isBlog={false}
              title="Loan Credit System"
              description="I was involved in adapting a loan credit system from jQuery to React, which involved a significant amount of refactoring and rearchitecting. By leveraging React's modern and efficient framework, I was able to create a more streamlined and responsive system. This project allowed me to enhance my skills in front-end development and gain a deeper understanding of the benefits of using React in modern web development." 
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
