import React from 'react';
import Project from '../Project';

import Web1 from '../../images/projects/WEB/Code2.png'
import Web2 from '../../images/projects/WEB/Code3.png'

import CC1 from '../../images/projects/CC/Logo.jpg'

import EQ1 from '../../images/projects/EQ/Landscape.png'

export default function Projects() {
  const projects = [
    {
      title: 'Esta misma web',
      description: 'Realizada usando React-Bootstrap y desplegada mediante GitHub Pages, este es mi proyecto más reciente.',
      images: [Web1, Web2],
      link: 'https://github.com/adrsorlop/personal-web',
    },
    {
      title: 'Command & Conquer',
      description: 'Mi TFG de Desarrollo de Aplicaciones Multiplataforma (DAM). Se trata de un juego de estrategia por turnos de escritorio. Se usó Node.js, Electron-Vite, React-Bootstrap y JavaScript.',
      images: [CC1],
      link: 'https://github.com/adrsorlop/command-conquer',
    },
    {
      title: "Elfred's Quest",
      description: 'Mi TFG de Desarrollo de Videojuegos. Se trata de un juego de plataformas desarrollado en Unreal Engine.',
      images: [EQ1],
      link: 'https://ads0l0.itch.io/elfreds-quest',
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
        {projects.map((project, index) => (
            <Project
              title={project.title}
              description={project.description}
              images={project.images}
              link={project.link}
            />
        ))}
    </section>
  );
}
