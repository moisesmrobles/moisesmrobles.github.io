// src/components/Footer.tsx
import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin, BsEnvelopeFill } from 'react-icons/bs';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); // Obtenemos el año actual automáticamente

  return (
    <footer className="bg-body-tertiary py-5 mt-auto border-top">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Redes Sociales y Contacto */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Moisés Moreno</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a 
                href="https://github.com/moisesmrobles" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary fs-4 text-decoration-none"
                title="GitHub"
              >
                <BsGithub />
              </a>
              <a 
                href="https://linkedin.com/in/moises-moreno-robles-2b001b151" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary fs-4 text-decoration-none"
                title="LinkedIn"
              >
                <BsLinkedin />
              </a>
              <a 
                href="mailto:moisesmrobles@gmail.com" 
                className="text-secondary fs-4 text-decoration-none"
                title="Email"
              >
                <BsEnvelopeFill />
              </a>
            </div>
          </div>

          {/* Tecnologías utilizadas (Tech Stack del Portfolio) */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <p className="text-secondary mb-2 fw-medium">
              {t('footer_built_with')}
            </p>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">React</span>
              <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">Vite</span>
              <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">Bootstrap 5</span>
              {/* Nuevo Badge destacando la IA */}
              <span 
                className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25"
                title={t('footer_ai_assist')}
              >
                ✨ NotebookLM
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <p className="text-secondary mb-0 small">
              &copy; {currentYear} Moisés Moreno. <br className="d-block d-sm-none" />
              {t('footer_rights')}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};