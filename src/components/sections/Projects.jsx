import React from 'react';
import Project from '../Project';

export default function Projects() {

  function importAll(r) {
    return r.keys().map(r);
  }

  const CCImages = importAll(require.context('../../images/projects/CC', false, /\.(png|jpe?g|svg)$/));
  const WebImages = importAll(require.context('../../images/projects/WEB', false, /\.(png|jpe?g|svg)$/));
  const EQImages = importAll(require.context('../../images/projects/EQ', false, /\.(png|jpe?g|svg)$/));
  const GymImages = importAll(require.context('../../images/projects/Gym', false, /\.(png|jpe?g|svg)$/));


  const projects = [
    {
      title: 'Esta misma web',
      description: 'Página web que muestra mis conocimientos y habilidades. Realizada usando React-Bootstrap y desplegada mediante GitHub Pages, este es mi proyecto más reciente. Ha sido realizada de una manera modular, la cual permite expandir los contenidos de manera fácil y rápida.',
      images: WebImages,
      categories: ['personal', 'web', 'escritorio', 'movil'],
      link: 'https://github.com/adrsorlop/personal-web'
    },
    {
      title: 'Command & Conquer',
      description: 'Juego de estrategia y gestión de recursos para dos jugadores en local. '+'Enfréntate a tu oponente y captura su base en un tablero que puedes personalizar, utilizando unidades predefinidas o creando tú las tuyas.'+'Se usó Node.js, Electron-Vite, React-Bootstrap y JavaScript.',
      images: CCImages,
      categories: ['instituto', 'aplicacion', 'escritorio'],
      link: 'https://github.com/adrsorlop/command-conquer'
    },
    {
      title: 'My Gym Routine',
      description: 'Aplicación móvil para gestionar rutinas semanales de ejercicios en el gimnasio. ' + 'Permite crear rutinas personalizadas, añadir ejercicios y registrar el progreso de cada uno de ellos. ' + 'Se usó Android Studio y Kotlin para su desarrollo, además del uso de DataStore para el almacenamiento de datos en el dispositivo.',
      images: GymImages,
      categories: ['personal', 'aplicacion', 'movil'],
      link: 'https://github.com/adrsorlop/my-gym-routine'
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
          categories={project.categories}
        />
      ))}
    </section>
  );
}
