// src/sections/Hero.tsx
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center pt-5 mt-n5">
      <h1 className="display-4 fw-bold text-body mb-2">
        {t('welcome')}
      </h1>
      
      <h2 className="display-2 fw-bolder mb-4 hero-glow-text">
        {t('hero_title')}
      </h2>

      <p className="lead fs-4 text-secondary mb-5 w-75 mx-auto">
        {t('hero_subtitle')}
      </p>

      {/* Botones de llamada a la acción */}
      <div className="d-flex gap-3 flex-column flex-sm-row">
        <a 
          href="#proyectos" 
          className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow-sm"
          style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
        >
          {t('btn_projects')}
        </a>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline-secondary btn-lg px-5 py-3 fw-bold rounded-pill"
        >
          {t('btn_cv')}
        </a>
      </div>
    </section>
  );
};