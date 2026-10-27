import React from 'react';
import Project from '../Project';

export default function Projects() {

  function importAll(r) {
    return r.keys().map(r);
  }
  const PodcasTImages = importAll(require.context('../../images/projects/PODCAST', false, /\.(png|jpe?g|svg)$/));


  const projects = [
    {
      title: 'Podcasts con IA',
      description: 'Podcasts diarios de notícias tecnológicas generados por inteligencia artificial. Proceso automatizado mediante la plataforma n8n, el cual permite el uso de un modelo ya entrenado y publicación en Spotify. Este proceso incluye recolección de noticias, generación de guión, generación de audio, y publicación del podcast.',
      images: PodcasTImages,
      categories: [],
      link: ''
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
