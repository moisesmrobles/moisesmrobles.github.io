// src/sections/Projects.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, type Project } from '../data/projects';

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // ESTADO: Controla si el carrusel está en pantalla completa
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="proyectos" className="container py-5 mt-5">
      <h2 className="display-5 fw-bold text-center mb-5">
        {t('nav_projects')}
      </h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <div className="card h-100 glass-card bg-transparent border-0">
              
              <div className="card-body p-4 d-flex flex-column">
                <h3 className="h4 fw-bold mb-3">{t(project.titleKey)}</h3>
                
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className={`badge border bg-opacity-10 px-2 py-1 ${project.statusKey === 'proj_status_completed' ? 'bg-success text-success border-success' : 'bg-warning text-warning border-warning'}`}>
                    {t(project.statusKey)}
                  </span>
                  <span className="badge bg-info bg-opacity-10 text-info border border-info px-2 py-1">
                    {t(project.teamKey)}
                  </span>
                </div>

                <p className="card-text text-secondary flex-grow-1">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="d-flex flex-wrap gap-2 mt-3 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="badge premium-badge px-3 py-2">
                      {t(tech)}
                    </span>
                  ))}
                </div>

                <button 
                  className="btn btn-outline-primary fw-bold rounded-pill mt-auto"
                  data-bs-toggle="modal" 
                  data-bs-target="#projectModal"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsExpanded(false); // Siempre empieza minimizado
                  }}
                >
                  {t('btn_view_details')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE BOOTSTRAP NORMAL */}
      <div className="modal fade" id="projectModal" tabIndex={-1} aria-labelledby="projectModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content glass-card bg-transparent border-0 shadow-lg">
            
            {/* ENCABEZADO CORREGIDO PARA MÓVILES EXTREMOS */}
            <div className="modal-header border-bottom border-secondary border-opacity-25 align-items-start">
              <div className="w-100 pe-4">
                <h5 className="modal-title fw-bold fs-4 text-wrap lh-base" id="projectModalLabel">
                  {selectedProject ? t(selectedProject.titleKey) : ''}
                </h5>
                {selectedProject && (
                  <span className="badge bg-primary bg-opacity-25 text-primary border border-primary mt-2 px-3 py-2 fs-6 text-wrap text-start lh-base d-inline-block">
                    {t(selectedProject.roleKey)}
                  </span>
                )}
              </div>
              <button type="button" className="btn-close flex-shrink-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body p-4">
              
              {/* CARRUSEL DENTRO DEL MODAL */}
              {selectedProject && selectedProject.media && selectedProject.media.length > 0 ? (
                <div 
                  id={`carousel-${selectedProject.id}`} 
                  className="carousel slide mb-4 overflow-hidden rounded shadow-sm border border-secondary border-opacity-25" 
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" style={{ backgroundColor: '#000' }}>
                    {selectedProject.media.map((item, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        {item.type === 'video' ? (
                          <video 
                            src={item.url} 
                            className="d-block w-100 object-fit-contain"
                            autoPlay loop muted playsInline
                            style={{ height: '400px', cursor: 'zoom-in' }}
                            onClick={() => setIsExpanded(true)}
                          >
                            Tu navegador no soporta el vídeo.
                          </video>
                        ) : (
                          <img 
                            src={item.url} 
                            className="d-block w-100 object-fit-contain" 
                            alt={`Captura de pantalla de ${t(selectedProject.titleKey)}`}
                            style={{ height: '400px', cursor: 'zoom-in' }} 
                            onClick={() => setIsExpanded(true)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {selectedProject.media.length > 1 && (
                    <>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${selectedProject.id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${selectedProject.id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="mb-4 text-center text-secondary border border-secondary border-opacity-25 rounded p-5 glass-card">
                  <em>Contenido multimedia en preparación para {selectedProject ? t(selectedProject.titleKey) : ''}</em>
                </div>
              )}

              {/* TEXTO DESCRIPTIVO */}
              <p className="fs-5 text-secondary" style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                {selectedProject 
                  ? (selectedProject.detailedDescriptionKey 
                      ? t(selectedProject.detailedDescriptionKey) 
                      : t(selectedProject.descriptionKey)) 
                  : ''}
              </p>
            </div>
            
            <div className="modal-footer border-top border-secondary border-opacity-25">
              <button type="button" className="btn btn-secondary rounded-pill fw-bold" data-bs-dismiss="modal">
                {t('btn_close')}
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* VISOR DE PANTALLA COMPLETA TOTAL (Con animaciones CSS) */}
      {selectedProject && selectedProject.media && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ 
            zIndex: 1080, 
            backgroundColor: 'rgba(0,0,0,0.95)', 
            backdropFilter: 'blur(10px)',
            opacity: isExpanded ? 1 : 0, 
            visibility: isExpanded ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
          }}
        >
          {/* BOTÓN CERRAR PANTALLA COMPLETA */}
          <button 
            type="button" 
            className="btn-close btn-close-white position-absolute top-0 end-0 m-4" 
            style={{ zIndex: 1090, width: '1.5rem', height: '1.5rem' }} 
            onClick={() => setIsExpanded(false)}
            aria-label="Cerrar"
          ></button>

          {/* Carrusel Clonado para Pantalla Completa con Zoom-In */}
          <div 
            id={`carousel-fullscreen-${selectedProject.id}`} 
            className="carousel slide w-100 h-100" 
            data-bs-ride="carousel"
            style={{
              transform: isExpanded ? 'scale(1)' : 'scale(0.9)',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <div className="carousel-inner w-100 h-100" style={{ backgroundColor: 'transparent' }}>
              {selectedProject.media.map((item, index) => (
                <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}>
                  {item.type === 'video' ? (
                    <video 
                      src={item.url} 
                      className="d-block w-100 h-100 object-fit-contain p-4"
                      autoPlay loop muted playsInline
                    />
                  ) : (
                    <img 
                      src={item.url} 
                      className="d-block w-100 h-100 object-fit-contain p-4" 
                      alt={`Captura de pantalla de ${t(selectedProject.titleKey)}`}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Controles de Pantalla Completa */}
            {selectedProject.media.length > 1 && (
              <>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-fullscreen-${selectedProject.id}`} data-bs-slide="prev" style={{ width: '10%' }}>
                  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-fullscreen-${selectedProject.id}`} data-bs-slide="next" style={{ width: '10%' }}>
                  <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </section>
  );
};