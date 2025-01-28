import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/About/AboutMe/AboutMe';
import BioSection from './components/About/Description/Description';
import Stacks from './components/Stacks/Stacks';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <header className="default-wrapper">
          <Row>
            <Col className="content-column p-0">
              <Header />
            </Col>
          </Row>
        </header>

        <main>
          <section id="about-section" className="default-wrapper">
            <Row>
              <Col className="content-column p-0">
                <AboutMe />
              </Col>
            </Row>
          </section>

          <section id="bio-section" className="blue-wrapper">
            <Row>
              <Col className="content-column p-0">
                <BioSection />
              </Col>
            </Row>
          </section>

          <section id="stacks-section" className="default-wrapper">
            <Row>
              <Col className="content-column p-0">
                <Stacks />
              </Col>
            </Row>
          </section>

          <section id="education-section" className="blue-wrapper">
            <Row>
              <Col className="content-column p-0">
                <Education />
              </Col>
            </Row>
          </section>

          <section id="projects-section" className="default-wrapper">
            <Row>
              <Col className="content-column p-0">
                <Experience />
              </Col>
            </Row>
          </section>

          <section id="contact-section" className="blue-wrapper">
            <Row>
              <Col className="content-column p-0">
                <Contact />
              </Col>
            </Row>
          </section>
        </main>

        <footer className="footer-wrapper">
          <Row>
            <Col className="content-column footer-row p-0">
              <Footer />
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
}

export default App;