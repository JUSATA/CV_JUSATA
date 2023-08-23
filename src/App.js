import React from "react";
import ReactToPdf from "react-to-pdf";
import MainWrapper from "./styled-components/MainWrapper";
import CvWrapper from "./styled-components/CvWrapper";
import LeftBar from "./styled-components/LeftBar";
import RightBar from "./styled-components/RightBar";
import IntroBar from "./styled-components/IntroBar";
import LeftSection from "./styled-components/LeftSection";
import RightSection from "./styled-components/RightSection";
import profilowe from "./img/FONDOGRIS.PNG";
import { name, address1, address2, mail, phone, github, legalNote } from "./data/PersonalData";

const App = () => {
  const ref = React.createRef();

  const renderBolts = (power) => {
    let a = [1, 2, 3, 4, 5];
    return (
      <ul className="bolts">
        {a.map((elem, index) => (
          <li className={elem <= power ? "on" : "off"}></li>
        ))}
      </ul>
    );
  };

  return (
    <MainWrapper>
      <ReactToPdf targetRef={ref} filename="CV_Julian_Sanchez.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} style={{ position: "absolute", top: 0, left: 0, zIndex: 9999 }}>
            Generate pdf
          </button>
        )}
      </ReactToPdf>
      <CvWrapper ref={ref}>
        <LeftBar>
          <img src={profilowe} alt="Profilowe" />
          <LeftSection>
            <h2 className="header">Julian Sanchez Taborda</h2>
            <p className="strong">E-mail:</p>
            <p>{mail}</p>
            <p className="strong">Phone:</p>
            <p>{phone}</p>
            <p className="strong">GitHub:</p>
            <p>{github}</p>
          </LeftSection>
          <LeftSection>
            <h2 className="header">Skill Highlights</h2>
            <ul>
              <li>Effective communication</li>
              <li>Complex problem solver</li>
              <li>Proactivity</li>
              <li>Service-focused</li>
              <li>Handly and friendly with new Technology</li>
            </ul>
          </LeftSection>
          <LeftSection>
            <h2 className="header">Languages</h2>
            <ul>
              <li>Spanish – NATIVE</li>
              <li>English – B1</li>
            </ul>
          </LeftSection>
        </LeftBar>
        <IntroBar>
          <ul>
                  <p><b>Software Web Developer</b>  Passionate fullstack developer specialized in implementing new technologies and patterns that streamline software development with quality and agility. Experienced in frontend technologies such as ANGULAR CLI and ANGULARJS, with a backend expertise in NODEJS and C# .NET, utilizing SQL SERVER as the database. I have worked on application development focused on human resources, project management (PPM), corporate finance, and commercial management (CRM)</p>
          </ul>
        
        <RightBar>
  
          {/* <RightSection>
            <h1 className="name">{name}</h1>
            <h2 className="title">FullStack Developer</h2>
          </RightSection> */}
          <RightSection>
            <h2 className="header">Experience</h2>
            <ul>
              <li className="list-parent">
                <p>Software Analyst - Madecentro colombia (08/2020 to 11/2022)</p>
                <ul>
                  <li>Develop solutions in AngularJS and Angular CLI to optimize processes within our organization, with a backend developed in Node.js and .NET, and handling stored procedures and scheduled tasks in SQL SERVER.</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>Software Analyst  - Pratech Group (04/2019 to 08/2020)</p>
                <ul>
                  <li>Develop solutions for the flow of cognitive chatbots using SOAP & REST services with technologies like Node.js, Docker containers, TypeScript, and HTML.</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>Software Analyst  - Segurvial (08/2015 to 11/2018)</p>
                <ul>
                  <li>Based on agile development technology MEAN fullstack (mongo, express, angular, node) with the Google Maps API and charts designed with Highcharts to display accident indicators and trends.</li>
                </ul>
              </li>
            </ul>
          </RightSection>
          <RightSection>
            <h2 className="header">Education</h2>
            <ul>
              <li className="list-parent">
                <p>Systems Engineer</p>
                <ul>
                  <li>Institución Universitaria de Envigado</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>Tech Analysis and Development of Information Systems </p>
                <ul>
                  <li>SENA</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>Systems technical</p>
                <ul>
                  <li>Corporación Politécnica de Girardota.</li>
                </ul>
              </li>
            </ul>
          </RightSection>
          <RightSection>
            <h2 className="header">Programming languages</h2>
            <ul className="skills">
              <li className="skill">HTML {renderBolts(5)}</li>
              <li className="skill">CSS {renderBolts(5)}</li>
              <li className="skill">SQL {renderBolts(4)}</li>
              <li className="skill">JavaScript {renderBolts(4)}</li>
              <li className="skill">Angular Cli {renderBolts(4)}</li>
              <li className="skill">React {renderBolts(3)}</li>
              <li className="skill">C# {renderBolts(4)}</li>
            </ul>
          </RightSection>
          <RightSection>
            <h2 className="header">Besides</h2>
            <p style={{ textAlign: "justify" }}>
              GIT,Bootstrap,REST API.
            </p>
          </RightSection>
        </RightBar></IntroBar>
      </CvWrapper>
    </MainWrapper>
  );
};

export default App;
