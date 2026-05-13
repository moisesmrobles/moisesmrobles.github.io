// src/sections/Experience.tsx
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/experience';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    // ¡Aquí está la magia del id="experiencia" para que funcione tu menú!
    <section id="experiencia" className="container py-5 mt-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        {t('nav_experience')}
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Recorremos nuestra "base de datos" automáticamente */}
          {experiences.map((exp) => (
            <div key={exp.id} className="card shadow-sm mb-4 border-0">
              <div className="card-body p-4">
                {/* Traducimos las claves dinámicamente */}
                <h3 className="h4 fw-bold" style={{ color: '#007bff' }}>
                  {t(exp.roleKey)}
                </h3>
                <h5 className="text-secondary mb-3 fw-medium">
                  {exp.company} <span className="mx-2">|</span> {t(exp.dateKey)}
                </h5>
                <p className="card-text fs-5">{t(exp.descriptionKey)}</p>

                {/* Etiquetas de las tecnologías (Tech Stack) */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {exp.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25 px-3 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};