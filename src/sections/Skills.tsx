// src/sections/Skills.tsx
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data/skills';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="container py-5 mt-5 mb-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        {t('nav_skills')}
      </h2>

      {/* La clase "row" tiene que envolver el map, no al revés */}
      <div className="row g-4 justify-content-center">
        {skillsData.map((category) => (
          <div key={category.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 glass-card bg-transparent border-0">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-4" style={{ color: '#007bff' }}>
                  {t(category.titleKey)}
                </h4>
                
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="badge premium-badge px-3 py-2 fs-6"
                    >
                      {t(skill)} {/* <-- Aquí añadimos la t() */}
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