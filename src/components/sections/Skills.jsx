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
      <hr />
      <table>
        <tr>
          <td>
            <Card title="Java" type="lang" level={5} />
          </td>
          <td>
            <Card title="JavaScript" type="lang" level={4} />
          </td>
          <td>
            <Card title="C++" type="lang" level={4} />
          </td>
          <td>
            <Card title="Kotlin" type="lang" level={3} />
          </td>
          <td>
            <Card title="MySQL" type="lang" level={4} />
          </td>
        </tr>
      </table>
      <br/>
      <h3>Desarrollo web</h3>
      <hr />
      <table>
        <tr>
          <td>
            <Card title="HTML" type="web" level={5} />
          </td>
          <td>
            <Card title="CSS" type="web" level={3} />
          </td>
          <td>
            <Card title="React" type="web" level={4} />
          </td>
          <td>
            <Card title="Bootstrap" type="web" level={4} />
          </td>
          <td>
            <Card title="NodeJS" type="web" level={2} />
          </td>
        </tr>
      </table>
      <br/>
      <h3>Control de versiones</h3>
      <hr />
      <table>
        <tr>
          <td>
            <Card title="Git" type="version" level={4} />
          </td>
          <td>
            <Card title="GitHub" type="version" level={4} />
          </td>
          <td>
            <Card title="Diversion" type="version" level={5} />
          </td>
        </tr>
      </table>
    </section>
  );
}
