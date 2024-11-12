// src/components/ProjectSection.tsx
import React, { useState } from 'react';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Traductor de Lenguajes de Programación",
    description:
      "Un traductor que convierte código entre diferentes lenguajes de programación. Facilita la comprensión de la sintaxis y lógica en otros lenguajes.",
    technologies: ["JavaScript", "Python", "React", "Node.js"],
    githubLink: "https://github.com/tu-usuario/traductor-lenguajes",
  },
  {
    title: "Notion Directory Renderer",
    description:
      "Una herramienta que toma cualquier directorio de Notion y muestra todos sus elementos y jerarquías en un repositorio de GitHub.",
    technologies: ["JavaScript", "Notion API", "React", "GitHub API"],
    githubLink: "https://github.com/tu-usuario/notion-directory-renderer",
  },
  {
    title: "Sistema de Gestión de Inventario",
    description:
      "Aplicación para gestionar inventarios de productos y automatizar procesos de stock.",
    technologies: ["TypeScript", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/tu-usuario/inventario",
  },
  {
    title: "Aplicación de Tareas",
    description: "Aplicación para gestionar tareas diarias y organizar el tiempo.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/tu-usuario/tareas",
  },
];

const ProjectSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  // Definir el número de proyectos visibles según el tamaño de la pantalla (máximo 2)
  const visibleProjects = 2;
  const projectsToDisplay = projects.slice(currentIndex, currentIndex + visibleProjects);

  return (
    <div id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 min-h-[70vh]">
      <h2 className="text-gray-900 dark:text-white text-4xl font-bold text-center mb-10">Proyectos</h2>

      <div className="relative flex items-center justify-center mx-auto max-w-screen-lg overflow-hidden">
        {/* Botón Izquierda */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl p-2 text-gray-600 dark:text-gray-300 z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Contenedor de Proyectos */}
        <div className="flex gap-6 overflow-hidden">
          {projectsToDisplay.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 max-w-sm w-full flex-shrink-0"
              style={{ minHeight: '300px' }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-600 dark:text-green-500 hover:underline"
              >
                <FaGithub className="mr-2" />
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Botón Derecha */}
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl p-2 text-gray-600 dark:text-gray-300 z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
