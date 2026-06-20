import React from 'react';
import Card from '../Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Mis conocimientos</h2>
      <p>Lista de tecnologías y habilidades.</p>
      <br/>
      <h3>Lenguajes de programación</h3>
      <hr/>
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          <Col>
            <Card title="Java" type="lang" level={5} />
          </Col>
          <Col>
            <Card title="JavaScript" type="lang" level={4} />
          </Col>
          <Col>
            <Card title="C++" type="lang" level={4} />
          </Col>
          <Col>
            <Card title="Kotlin" type="lang" level={3} />
          </Col>
          <Col>
            <Card title="MySQL" type="lang" level={4} />
          </Col>
        </Row>
      </Container>
      <br/>
      <h3>Desarrollo web</h3>
      <hr/>
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          <Col>
            <Card title="HTML" type="web" level={5} />
          </Col>
          <Col>
            <Card title="CSS" type="web" level={3} />
          </Col>
          <Col>
            <Card title="React" type="web" level={4} />
          </Col>
          <Col>
            <Card title="Bootstrap" type="web" level={4} />
          </Col>
          <Col>
            <Card title="NodeJS" type="web" level={2} />
          </Col>
        </Row>
      </Container>
      <br/>
      <h3>Control de versiones</h3>
      <hr/>
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          <Col>
            <Card title="Git" type="version" level={4} />
          </Col>
          <Col>
            <Card title="GitHub" type="version" level={4} />
          </Col>
          <Col>
            <Card title="Diversion" type="version" level={5} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
