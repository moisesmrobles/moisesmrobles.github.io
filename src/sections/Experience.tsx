// src/sections/Experience.tsx
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/experience';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="container py-5 mt-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        {t('nav_experience')}
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Contenedor del Timeline */}
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="position-relative mb-5">
                {/* Punto brillante de la línea */}
                <div className="timeline-dot"></div>
                
                {/* Tarjeta de Cristal (Glassmorphism) */}
                <div className="card glass-card p-4 border-0 bg-transparent">
                  <div className="card-body p-0">
                    <h3 className="h4 fw-bold" style={{ color: '#007bff' }}>
                      {t(exp.roleKey)}
                    </h3>
                    <h5 className="text-secondary mb-3 fw-medium">
                      {t(exp.company)} <span className="mx-2">|</span> {t(exp.dateKey)}
                    </h5>
                    <p className="card-text fs-5 mb-0">{t(exp.descriptionKey)}</p>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                      {exp.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className="badge premium-badge px-3 py-2"
                        >
                          {t(tech)} {/* <-- Aquí añadimos la t() */}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};