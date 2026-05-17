// src/sections/About.tsx
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="container py-5 mt-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        {t('about_title')}
      </h2>

      <div className="row g-5 align-items-center">
        {/* Columna Izquierda: Filosofía de trabajo e IA */}
        <div className="col-lg-6">
          <div className="p-4 border-start border-primary border-4 glass-card bg-transparent shadow-sm">
            <h3 className="h4 fw-bold mb-3">{t('about_ai_title')}</h3>
            <p className="fs-5 text-secondary mb-0" style={{ lineHeight: '1.8' }}>
              {t('about_ai_desc')}
            </p>
          </div>
        </div>

        {/* Columna Derecha: Certificación e Idiomas */}
        <div className="col-lg-6">
          <div className="d-flex flex-column gap-4">
            
            {/* Tarjeta de Certificación */}
            <div className="card glass-card bg-transparent border-0 shadow-sm">
              <div className="card-body p-4">
                <h6 className="text-primary fw-bold text-uppercase mb-2">
                  {t('certifications_title')}
                </h6>
                <h4 className="h5 fw-bold">{t('cert_ai_title')}</h4>
                <p className="text-secondary mb-0">{t('cert_ai_school')}</p>
              </div>
            </div>

            {/* Tarjeta de Idiomas */}
            <div className="card glass-card bg-transparent border-0 shadow-sm">
              <div className="card-body p-4">
                <h6 className="text-primary fw-bold text-uppercase mb-2">
                  {t('languages_title')}
                </h6>
                <h4 className="h5 fw-bold mb-0">
                  <span className="text-primary me-2">EN</span> {t('lang_english')}
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};