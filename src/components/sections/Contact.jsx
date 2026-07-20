import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Dónde encontrarme</h2>
      <Container className='contactTable'>
        <Row style={{border: '3px solid rgb(255, 255, 255, 0.5)'}}>
          <Col>
            <a href='https://github.com/adrsorlop'><i class="bi bi-github" style={{ fontSize: '6rem', padding: '10px' }}></i></a>
          </Col>
          <Col>
            <a href='https://www.linkedin.com/in/adrian-soriano-389411347/'><i class="bi bi-linkedin" style={{ fontSize: '6rem', padding: '10px' }}></i></a>
          </Col>
        </Row>
      </Container>
      <br/>
    </section>
  );
}
