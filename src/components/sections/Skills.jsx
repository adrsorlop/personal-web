import React from 'react';
import Card from '../Card';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Mis conocimientos</h2>
      <p>Lista de tecnologías y habilidades.</p>
      <h3>Lenguajes de programación</h3>
      <hr/>
      <table>
        <tr>
          <td>
            <Card title="Java" type="lang" />
          </td>
          <td>
            <Card title="JavaScript" type="lang" />
          </td>
          <td>
            <Card title="C++" type="lang" />
          </td>
          <td>
            <Card title="Kotlin" type="lang" />
          </td>
          <td>
            <Card title="MySQL" type="lang" />
          </td>
        </tr>
      </table>
      <h3>Desarrollo web</h3>
      <hr/>
      <table>
        <tr>
          <td>
            <Card title="HTML" type="web" />
          </td>
          <td>
            <Card title="CSS" type="web" />
          </td>
          <td>
            <Card title="React" type="web" />
          </td>
          <td>
            <Card title="Bootstrap" type="web" />
          </td>
          <td>
            <Card title="NodeJS" type="web" />
          </td>
        </tr>
      </table>
      <h3>Control de versiones</h3>
      <hr/>
      <table>
        <tr>
          <td>
            <Card title="Git" type="version" />
          </td>
          <td>
            <Card title="GitHub" type="version" />
          </td>
          <td>
            <Card title="Diversion" type="version" />
          </td>
        </tr>
      </table>
    </section>
  );
}
