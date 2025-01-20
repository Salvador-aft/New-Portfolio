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
        <header>
          <Row>
            <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            <Col xs={10} md={10} lg={10} className="p-0">
              <Header />
            </Col>
            <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
          </Row>
        </header>

        <main>
          <section>
            <Row>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
              <Col xs={10} md={10} lg={10} className="p-0">
                <AboutMe />
              </Col>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            </Row>
          </section>

          <section className="blue-wrapper">
            <Row>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
              <Col xs={10} md={10} lg={10} className="p-0">
                <BioSection />
              </Col>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            </Row>
          </section>

          <section>
            <Row>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
              <Col xs={10} md={10} lg={10} className="p-0">
                <Stacks />
              </Col>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            </Row>
          </section>

          <section className='blue-wrapper'>
            <Row>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
              <Col xs={10} md={10} lg={10} className="p-0">
                <Education />
              </Col>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            </Row>
          </section>

          <section>
            <Row>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
              <Col xs={10} md={10} lg={10} className="p-0">
                <Experience />
              </Col>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            </Row>
          </section>

          <section className='blue-wrapper'>
            <Row>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
              <Col xs={10} md={10} lg={10} className="p-0">
                <Contact />
              </Col>
              <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            </Row>
          </section>
        </main>

        <footer>
          <Row>
            <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
            <Col xs={10} md={10} lg={10} className="p-0">
              <Footer />
            </Col>
            <Col xs={1} md={1} lg={1} className="p-0 empty-col"></Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
}

export default App;