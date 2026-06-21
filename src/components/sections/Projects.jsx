import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project from '../Project';
import WebImage from '../../images/ProjectWeb.jpg'
import CC from '../../images/HeavyInfantry.jpg'
import EQ from '../../images/EQ.png'

export default function Projects() {
  const projects = [
    {
      title: 'Esta misma web',
      description: 'Realizada usando React-Bootstrap y desplegada mediante GitHub Pages, este es mi proyecto más reciente.',
      image: WebImage,
      link: 'https://github.com/adrsorlop/personal-web'
    },
    {
      title: 'Command & Conquer',
      description: 'Mi TFG de Desarrollo de Aplicaciones Multiplataforma (DAM). Se trata de un juego de estrategia por turnos de escritorio. Se usó Node.js, Electron-Vite, React-Bootstrap y JavaScript.',
      image: CC,
      link: 'https://github.com/adrsorlop/command-conquer'
    },
    {
      title: "Elfred's Quest",
      description: 'Mi TFG de Desarrollo de Videojuegos. Se trata de un juego de plataformas desarrollado en Unreal Engine.',
      image: EQ,
      link: 'https://ads0l0.itch.io/elfreds-quest'
    }
  ];

  return (
    <section id="projects">
      <h2>Mis proyectos</h2>
      <p>No sólo he adquirido nuevos conocimentos, también los he puesto en práctica, desarrollando algunos proyectos algo más complejos y elaborados.
        Cuando empiezo un proyecto, me gusta hacer las cosas bien desde un principio, tener mis objetivos claros y ejecutarlos de la manera más óptima
        posible. A continuación, podéis ver algunos de mis proyectos junto a sus repositorios en el caso de que os interese cómo está construido.
      </p>
      <br/>
      <Carousel>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
