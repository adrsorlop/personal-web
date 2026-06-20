import React from 'react';
import Card from '../Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills() {

  const knowledge = [
    {
      title: 'Java',
      type: 'lang',
      level: 5
    },
    {
      title: 'JavaScript',
      type: 'lang',
      level: 4
    },
    {
      title: 'C++',
      type: 'lang',
      level: 4
    },
    {
      title: 'Kotlin',
      type: 'lang',
      level: 3
    },
    {
      title: 'MySQL',
      type: 'lang',
      level: 4
    },
    {
      title: 'HTML',
      type: 'web',
      level: 5
    },
    {
      title: 'CSS',
      type: 'web',
      level: 3
    },
    {
      title: 'React',
      type: 'web',
      level: 4
    },
    {
      title: 'Bootstrap',
      type: 'web',
      level: 4
    },
    {
      title: 'NodeJS',
      type: 'web',
      level: 2
    },
    {
      title: 'Git',
      type: 'version',
      level: 4
    },
    {
      title: 'GitHub',
      type: 'version',
      level: 4
    },
    {
      title: 'Diversion',
      type: 'version',
      level: 5
    }
  ];

  return (
    <section id="skills">
      <h2>Mis conocimientos</h2>
      <p>Lista de tecnologías y habilidades.</p>
      <br />
      <h3>Lenguajes de programación</h3>
      <hr />
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          {knowledge.map((card, index) => {

            if (card.type == 'lang') {
              return (
                <Col key={index}>
                  <Card title={card.title} type={card.type} level={card.level} />
                </Col>
              )
            }
          })}
        </Row>
      </Container>
      <br />
      <h3>Desarrollo web</h3>
      <hr />
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          {knowledge.map((card, index) => {

            if (card.type == 'web') {
              return (
                <Col key={index}>
                  <Card title={card.title} type={card.type} level={card.level} />
                </Col>
              )
            }
          })}
        </Row>
      </Container>
      <br />
      <h3>Control de versiones</h3>
      <hr />
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          {knowledge.map((card, index) => {

            if (card.type == 'version') {
              return (
                <Col key={index}>
                  <Card title={card.title} type={card.type} level={card.level} />
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    </section>
  );
}
