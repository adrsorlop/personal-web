import React from 'react';
import Project from '../Project';

export default function Projects() {

  function importAll(r) {
    return r.keys().map(r);
  }

  const CCImages = importAll(require.context('../../images/projects/CC', false, /\.(png|jpe?g|svg)$/));
  const WebImages = importAll(require.context('../../images/projects/WEB', false, /\.(png|jpe?g|svg)$/));
  const EQImages = importAll(require.context('../../images/projects/EQ', false, /\.(png|jpe?g|svg)$/));


  const projects = [
    {
      title: 'Esta misma web',
      description: 'Página web que muestra mis conocimientos y habilidades. '+'Realizada usando React-Bootstrap y desplegada mediante GitHub Pages, este es mi proyecto más reciente.',
      images: WebImages,
      link: 'https://github.com/adrsorlop/personal-web',
    },
    {
      title: 'Command & Conquer',
      description: 'Juego de estrategia y gestión de recursos para dos jugadores en local. '+'Enfréntate a tu oponente y captura su base en un tablero que puedes personalizar, utilizando unidades predefinidas o creando tú las tuyas.'+'Se usó Node.js, Electron-Vite, React-Bootstrap y JavaScript.',
      images: CCImages,
      link: 'https://github.com/adrsorlop/command-conquer',
    },
    {
      title: "Elfred's Quest",
      description: 'Juego de plataformas, combate y exploración para un jugador desarrollado en Unreal Engine.',
      images: EQImages,
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
      <br />
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
