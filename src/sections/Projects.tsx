// src/sections/Projects.tsx
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    // El id="proyectos" hará que el botón del Navbar funcione
    <section id="proyectos" className="container py-5 mt-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        {t('nav_projects')}
      </h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <div className="card h-100 shadow-sm border-0 bg-body-tertiary">
              {/* Aquí insertaremos los vídeos .mp4 más adelante */}
              <div className="card-body p-4 d-flex flex-column">
                <h3 className="h4 fw-bold">{t(project.titleKey)}</h3>
                <p className="card-text text-secondary mt-2 flex-grow-1">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};