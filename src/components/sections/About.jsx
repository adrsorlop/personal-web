import React from 'react';
import Skill from '../Skill';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <section id="about">
      <h2>Sobre mi</h2>
      <p>Breve descripción sobre mí.</p>
      <Container>
        <Row>
          <Col sm={4}><Skill title="Código limpio" img="bi bi-stars" /></Col>
          <Col sm={4}><Skill title="Trabajo en equipo" img="bi bi-people" /></Col>
          <Col sm={4}><Skill title="Versátil" img="bi bi-arrows-fullscreen" /></Col>
        </Row>
        <Row>
          <Col sm={4}><Skill title="Aprendizaje rápido" img="bi bi-journal-text" /></Col>
          <Col sm={4}><Skill title="Ambicioso" img="bi bi-person-arms-up" /></Col>
          <Col sm={4}><Skill title="Optimización" img="bi bi-bar-chart-line-fill" /></Col>
        </Row>
      </Container>
    </section>
  );
}
