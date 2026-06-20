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
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col><Skill title="Código limpio" img="bi bi-stars" /></Col>
          <Col><Skill title="Trabajo en equipo" img="bi bi-people" /></Col>
          <Col><Skill title="Versátil" img="bi bi-arrows-fullscreen" /></Col>
          <Col><Skill title="Aprendizaje rápido" img="bi bi-journal-text" /></Col>
          <Col><Skill title="Ambicioso" img="bi bi-person-arms-up" /></Col>
          <Col><Skill title="Optimización" img="bi bi-bar-chart-line-fill" /></Col>
        </Row>
      </Container>
    </section>
  );
}
