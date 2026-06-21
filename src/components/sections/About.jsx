import React from 'react';
import Skill from '../Skill';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <section id="about">
      <h2>Sobre mi</h2>
      <p>
        Buenas, soy Adrián Soriano, un jóven de 20 años graduado en Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Videojuegos y Realidad Virtual.
        Mi pasión por la programación empezó hace unos años, en la Educación Secundaria Obligatoria, cuando me presentaron la asignatura de Informática. En ese momento,
        me di cuenta de que podía crear mis propios programas y códigos, y el ver que funcionaban o que eran útiles, me hizo saber al instante que me quería dedicar a
        esto. Desde entonces, he pasado por múltiples lenguajes de programación y entornos de desarrollo.
      </p>
      <br/>
      <p>
        No me gusta únicamente escribir código, también me apasiona hacerlo de una manera limpia y organizada, además de optimizarlo con el fin de mejorar el rendimiento
        y sacarle el máximo provecho al hardware. Mi objetivo es adquirir experiencia y empezar a construirme una carrera en este mundillo.
      </p>
      <br/>
      <h3>Mis Cualidades</h3>
      <hr/>
      <Container>
        <Row xs={2} sm={2} md={3} className="g-4">
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
