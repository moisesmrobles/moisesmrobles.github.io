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
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top">
      <div className="container">
        {/* Tu Logo / Nombre */}
        <a className="navbar-brand fw-bold" href="#">
          Moisés Moreno <span className="text-primary">Dev</span>
        </a>

        {/* Botón hamburguesa para móviles */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces y Controles */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto fw-medium">
            <li className="nav-item">
              <a className="nav-link" href="#experiencia">{t('nav_experience')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">{t('nav_projects')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">{t('nav_skills')}</a>
            </li>
          </ul>
          
          {/* Controles de Idioma y Tema */}
          <div className="d-flex gap-2 align-items-center mt-3 mt-lg-0">
            <button 
              className="btn btn-sm btn-outline-primary fw-bold" 
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