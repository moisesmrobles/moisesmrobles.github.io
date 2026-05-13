// src/App.tsx
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      
      {/* Contenedor principal temporal para seguir probando */}
      <main className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center mt-5">
          <h1 className="display-3 fw-bold mb-3">{t('welcome')}</h1>
          <p className="lead fs-3 text-secondary">{t('description')}</p>
        </div>
      </main>
    </>
  );
}

export default App;