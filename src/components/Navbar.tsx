// src/components/Navbar.tsx
import { useTranslation } from 'react-i18next';
import { ThemeToggleButton } from './ThemeToggleButton';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar navbar-expand-lg glass-navbar shadow-sm sticky-top">
      <div className="container py-2">
        
        {/* Logo Premium con Resplandor */}
        <a className="navbar-brand fw-bold fs-4" href="#">
          Moisés Moreno <span className="hero-glow-text">Dev</span>
        </a>

        {/* Botón hamburguesa sin borde feo */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces y Controles */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto fw-medium gap-3">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#sobre-mi">{t('nav_about')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#experiencia">{t('nav_experience')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#proyectos">{t('nav_projects')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#habilidades">{t('nav_skills')}</a>
            </li>
          </ul>

          {/* Controles de Idioma y Tema */}
          <div className="d-flex gap-3 align-items-center mt-3 mt-lg-0 justify-content-center">
            {/* Botón de idioma convertido en un Badge Premium */}
            <button
              className="btn premium-badge fw-bold px-3 py-1 rounded-pill"
              onClick={changeLanguage}
              title="Cambiar idioma"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
            <ThemeToggleButton />
          </div>
        </div>

      </div>
    </nav>
  );
};